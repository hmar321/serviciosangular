import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { Persona } from 'src/app/models/Persona';
@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css']
})
export class PersonasapiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _service: PersonasService) {

  }

  ngOnInit(): void {
    // this._service.getPersonas().subscribe(response => {
    //   this.personas = response;
    // });
    this._service.getPersonasPromesa().then(res=>{
      this.personas=res;
    });
  }


}
