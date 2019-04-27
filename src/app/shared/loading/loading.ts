import {Component, NgModule} from '@angular/core';

import {MatIconModule, MatProgressSpinnerModule} from '@angular/material';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.html',
  styleUrls: ['./loading.scss']
})
export class LoadingComponent {
  constructor() {

  }

}


@NgModule({
  imports: [
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [LoadingComponent],
  declarations: [LoadingComponent],
  entryComponents: [
    LoadingComponent
  ],
})
export class LoadingModule {}
