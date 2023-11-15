import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/Coche';
import { CochesService } from 'src/app/services/coches.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  public coches!: Array<Coche>;
  constructor(private _service: CochesService) {

  }
  ngOnInit(): void {
    this._service.getAllCoches().subscribe((response) => {
      console.log(response);
      
      this.coches = response;
    });
  }

}
