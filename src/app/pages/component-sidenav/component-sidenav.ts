import {
  Component, Input, NgZone, ViewEncapsulation, ViewChild, OnInit, NgModule, OnDestroy
} from '@angular/core';
import { DocumentationItems } from '../../shared/documentation-items/documentation-items';
import { MatSidenav, MatSidenavModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentHeaderModule } from '../component-page-header/component-page-header';
import { FooterModule } from '../../shared/footer/footer';
import { Observable, Subject, combineLatest } from 'rxjs';
import { switchMap, takeUntil, startWith, map } from 'rxjs/operators';
import { trigger, animate, state, style, transition } from '@angular/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SECTIONS } from '../../resume/resume-items'
import { WebDto } from 'src/app/dto/info';
import { InfoModel } from 'src/app/model/info';
const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.html',
  styleUrls: ['./component-sidenav.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentSidenav implements OnInit {
  params: Observable<Params>;
  isScreenSmall: Observable<boolean>;

  constructor(public docItems: DocumentationItems,
    private _route: ActivatedRoute,
    zone: NgZone,
    breakpoints: BreakpointObserver) {
    this.isScreenSmall = breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    // Combine params from all of the path into a single object.
    this.params = combineLatest(
      this._route.pathFromRoot.map(route => route.params),
      Object.assign);
  }

}

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.html',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({ height: '0px', display: 'none' })),
      state('expanded', style({ height: '*', display: 'block' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})
export class ComponentNav implements OnInit, OnDestroy {

  @Input() params: Observable<Params>;
  expansions = {};
  private _onDestroy = new Subject<void>();

  public infoModel: InfoModel;

  public sections = SECTIONS;
  public selectinfo: string;
  constructor(
    public docItems: DocumentationItems,
    private _router: Router,
    private webDto: WebDto) {
      this.infoModel = new InfoModel();
      this.infoModel = this.webDto.infoModel;
  }

  ngOnInit() {
    this.params =
      this.params.pipe(map(data => {
        let p: Params = [];
        p['SECTIONS'] = SECTIONS;
        return p;
      }));
    this.selectinfo = '手机';
  }

  ngOnDestroy() {

  }
  onclick(value: string) {
    this.selectinfo = value;
  }
}


@NgModule({
  imports: [
    MatSidenavModule,
    RouterModule,
    CommonModule,
    ComponentHeaderModule,
    FooterModule,
    BrowserAnimationsModule,
    MatIconModule,
    CdkAccordionModule
  ],
  exports: [ComponentSidenav],
  declarations: [ComponentSidenav, ComponentNav],
  providers: [DocumentationItems],
})
export class ComponentSidenavModule { }
