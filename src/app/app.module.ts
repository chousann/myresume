import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarModule} from './shared/navbar';
import {HomepageModule} from './pages/homepage';
// import {SvgViewerModule} from './shared/svg-viewer/svg-viewer';
import { GuideListModule } from './pages/guide-list';
import { ComponentSidenavModule } from './pages/component-sidenav/component-sidenav';
import { ComponentCategoryListModule } from './pages/component-category-list/component-category-list';
import { CanActivateComponentSidenav } from './pages/component-sidenav/component-sidenav-can-load-guard';
import { ComponentPageTitle } from './pages/page-title/page-title';
import { GaService } from './shared/ga/ga';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatButtonModule,
    MatCheckboxModule,

    AppRoutingModule,
    NavBarModule,
    HomepageModule,
    //SvgViewerModule,
    GuideListModule,
    ComponentSidenavModule,
    ComponentCategoryListModule,
  ],
  providers: [
    ComponentPageTitle,
    CanActivateComponentSidenav,
    GaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
