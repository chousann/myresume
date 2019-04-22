import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import {MatCardModule, MatListModule, MatGridListModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Params, RouterModule} from '@angular/router';
import {DocumentationItems, SECTIONS} from '../../shared/documentation-items/documentation-items';
import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
import {Observable, combineLatest, Subscription} from 'rxjs';


@Component({
  selector: 'app-job',
  templateUrl: './job.html',
  styleUrls: ['./job.scss']
})
export class JobComponent implements OnInit, OnDestroy {

  constructor(public docItems: DocumentationItems,
              private _route: ActivatedRoute) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}

@NgModule({
  imports: [SvgViewerModule, MatCardModule, CommonModule, RouterModule, MatListModule, MatGridListModule],
  exports: [JobComponent],
  declarations: [JobComponent],
  providers: [],
})
export class JobModule { }
