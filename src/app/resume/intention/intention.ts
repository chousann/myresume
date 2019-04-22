import {Component, NgModule, OnDestroy, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Params, RouterModule} from '@angular/router';
import {DocumentationItems, SECTIONS} from '../../shared/documentation-items/documentation-items';
import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
import {Observable, combineLatest, Subscription} from 'rxjs';


@Component({
  selector: 'app-intention',
  templateUrl: './intention.html',
  styleUrls: ['./intention.scss']
})
export class IntentionComponent implements OnInit, OnDestroy {

  constructor(public docItems: DocumentationItems,
              private _route: ActivatedRoute) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}

@NgModule({
  imports: [SvgViewerModule, MatCardModule, CommonModule, RouterModule],
  exports: [IntentionComponent],
  declarations: [IntentionComponent],
  providers: [],
})
export class IntentionModule { }
