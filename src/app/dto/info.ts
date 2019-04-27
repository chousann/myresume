import { Injectable } from '@angular/core';
import { InfoModel } from '../model/info';

@Injectable
(
  {
    providedIn: 'root'
  }
)
export class WebDto {
  infoModel: InfoModel = new InfoModel();
  authKey: string;
}

