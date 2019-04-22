import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
import {MatButtonModule} from '@angular/material';
import {FooterModule} from '../../shared/footer/footer';
import {RouterModule} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');

  constructor(public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.title = 'home';
  }
}

@NgModule({
  imports: [CommonModule, SvgViewerModule, MatButtonModule, FooterModule, RouterModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {}
