import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CochesService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = environment.urlApiCoches;
  }

  getAllCoches(): Observable<any> {
    var request = "webresources/coches";
    return this._http.get(this.url+request);
  }
}
