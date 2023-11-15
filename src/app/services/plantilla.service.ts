import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PlantillaService {
  public url:string;
  constructor(private _http:HttpClient) {
    this.url=environment.urlApiPlantilla;
  }
  getEmpleadosByFuncion(funcion:string):Observable<any>{
    var request="api/plantilla/plantillafuncion/"+funcion;
    return this._http.get(this.url+request);
  }

  getFunciones():Observable<any>{
    var request="api/plantilla/funciones";
    return this._http.get(this.url+request);
  }

  getEmpleadosByFunciones(funciones:Array<string>):Observable<any>{
    var aux=funciones.join("&funcion=");
    var request="api/Plantilla/PlantillaFunciones?funcion="+aux;
    return this._http.get(this.url+request);
  }
}
