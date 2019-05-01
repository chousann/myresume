import { Component, NgModule, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgViewerModule } from '../../shared/svg-viewer/svg-viewer';
import { MatButtonModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FooterModule } from '../../shared/footer/footer';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ComponentPageTitle } from '../page-title/page-title';
import { HttpClientModule } from '@angular/common/http';
import { InfoService } from 'src/app/service/info.service';
import { InfoModel } from 'src/app/model/info';
import { WebDto } from 'src/app/dto/info';
import { FormsModule } from '@angular/forms';
import { LoadingModule, LoadingComponent } from 'src/app/shared/loading/loading';
export interface DialogData {
  authKey: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  constructor(
    public _componentPageTitle: ComponentPageTitle,
    private infoservice: InfoService,
    private router: Router,
    private webDto: WebDto,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.webDto.loginId = params.loginId;
        this.webDto.authKey = params.authKey;
      }
    )
  }

  ngOnInit(): void {
    this._componentPageTitle.title = 'home';
  }

  async onclick() {
    let loading = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    let result: InfoModel = await this.infoservice.getInfo(this.webDto.loginId, this.webDto.authKey).toPromise();

    if (result.commonData.status !== '200') {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: { authKey: '' }
      });

      dialogRef.afterClosed().subscribe(async result1 => {
        console.log(result);
        let result2: InfoModel = await this.infoservice.getInfo('defaultid', result1).toPromise();
        if (result2.commonData.status === '200') {
          this.webDto.infoModel = result2;
          this.router.navigate(['/components']);
          loading.close();
          return;
        }
        loading.close();
        return;
      });
      return;
    }
    this.webDto.infoModel = new InfoModel();
    this.webDto.infoModel = result;
    this.router.navigate(['/components']);
    loading.close();
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@NgModule({
  imports: [HttpClientModule,
    CommonModule, SvgViewerModule, MatButtonModule, FooterModule, RouterModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    LoadingModule
  ],
  exports: [Homepage,
    DialogOverviewExampleDialog],
  declarations: [Homepage,
    DialogOverviewExampleDialog],
  providers: [InfoService],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
})
export class HomepageModule { }
