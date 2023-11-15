import { Injectable } from "@angular/core";
import { Persona } from "../models/Persona";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PersonasService {
    public url: string;
    constructor(private _http: HttpClient) {
        this.url = environment.urlApiPersonas;
    }
    // getAllPersonas(): Array<Persona> {
    //     var request = "api/personas";
    //     this._http.get<Array<Persona>>(this.url + request).subscribe({
    //         next: () => { },
    //         error: () => { },
    //         complete: () => { },
    //     });
    //     return [];
    // }

    getPersonas():Observable<any>{
        var request = "api/personas";
        //TENEMOS DOS FORMAS DE TRABAJAR CON LOS SERVICIOS Y SUS PROMESAS
        //1)IGUAL QUE EN VUE, CREAR UNA PROMESA AQUI EN ESTE METODO
        //Y DEVOLVER LOS DATOS QUE EXTRAEMOS DE DICHA PROMESA
        //2) DEVOLVER DIRECTAMENTE LA PROMESA PARA QUE EL COMPONENT SE SUBSCRIBA
        return this._http.get<Array<Persona>>(this.url+request);
    }

    getPersonasPromesa():Promise<any>{
        return new Promise((resolve)=>{
            var request = "api/personas";
            this._http.get<Array<Persona>>(this.url+request).subscribe((response)=>{
                resolve(response);
            });
        });
    }
}