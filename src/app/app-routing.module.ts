import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MATERIAL_DOCS_ROUTES } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(MATERIAL_DOCS_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
