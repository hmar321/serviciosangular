import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plantilla } from 'src/app/models/Plantilla';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
  @ViewChild("cajafuncion") cajaFuncionRef!: ElementRef;
  public funciones!: Array<string>;
  public empleados!: Array<Plantilla>;
  public opciones: any;
  public seleccionado!: any;

  constructor(private _service: PlantillaService) {

  }
  ngOnInit(): void {
    this._service.getFunciones().subscribe((response) => {
      this.funciones = response;
      this.opciones = this.funciones.map((funcion) => {
        return { name: funcion, code: funcion };
      });
    });
  }

  buscarEmpleados(): void {
    var funcion = this.cajaFuncionRef.nativeElement.value;
    this._service.getEmpleadosByFuncion(funcion).subscribe((response) => {
      this.empleados = response;
    });
  }

  buscarEmpleadosPrime(): void {
    var funcion = this.seleccionado.name;
    this._service.getEmpleadosByFuncion(funcion).subscribe((response) => {
      this.empleados = response;
    });
  }
}
