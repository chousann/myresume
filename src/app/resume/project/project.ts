import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule, MatListModule, MatGridListModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { DocumentationItems, SECTIONS } from '../../shared/documentation-items/documentation-items';
import { SvgViewerModule } from '../../shared/svg-viewer/svg-viewer';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { ResumeItem, InfoModel } from 'src/app/model/info';
import { WebDto } from 'src/app/dto/info';


@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrls: ['./project.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  public itemlist: ResumeItem[];
  constructor(public docItems: DocumentationItems,
    private _route: ActivatedRoute,
    private webDto: WebDto) {
    let infoModel: InfoModel = new InfoModel();
    this.itemlist = this.webDto.infoModel.aplData.education;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}

@NgModule({
  imports: [SvgViewerModule, MatCardModule, CommonModule, RouterModule, MatListModule, MatGridListModule],
  exports: [ProjectComponent],
  declarations: [ProjectComponent],
  providers: [],
})
export class ProjectModule { }
