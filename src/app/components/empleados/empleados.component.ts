import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from 'src/app/models/Plantilla';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  @ViewChild("cajafuncion") cajaFuncionRef!: ElementRef;
  public funciones!: Array<string>;
  public seleccionados!: Array<string>;
  public empleados!: Array<Plantilla>;
  constructor(private _service: PlantillaService) {
  }
  ngOnInit(): void {
    this._service.getFunciones().subscribe((res) => {
      this.funciones = res;
    });
  }
  buscarEmpleados(): void {
    var options = this.cajaFuncionRef.nativeElement.options;
    this.seleccionados = [];
    for (var option of options) {
      if (option.selected) {
        this.seleccionados.push(option.value);
      }
    }
    this._service.getEmpleadosByFunciones(this.seleccionados).subscribe((res)=>{
      this.empleados=res;
    });
  }
}
