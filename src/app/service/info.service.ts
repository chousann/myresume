import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoModel } from '../model/info';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(
    private http: HttpClient
  ) { }

  getInfo(): Observable<InfoModel>{
    let url: string;
    url = environment.baseUrl + '/api' + '/people';
    return this.http.get<InfoModel>(url).pipe(map(data => {
      return data;
    }))
  }

}
