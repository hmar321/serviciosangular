import { Component, OnInit } from '@angular/core';
import { Plantilla } from 'src/app/models/Plantilla';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {

  public funciones!: Array<string>;
  public seleccionados!: Array<string>;
  public empleados!: Array<Plantilla>;
  public funcionesPrime!:any;

  constructor(private _service: PlantillaService) {

  }
  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this._service.getFunciones().subscribe((res) => {
      this.funciones = res;
      this.funcionesPrime=this.funciones.map((funcion)=>({name:funcion}))
    });
  }

  buscarEmpleados(): void {
    console.log(this.seleccionados);
    this._service.getEmpleadosByFunciones(this.seleccionados).subscribe((res)=>{
      this.empleados=res;
    });
  }

  buscarEmpleadosPrime(): void {
    console.log(this.seleccionados);
    var auxFunciones=this.seleccionados.map((selecionado:any)=>(selecionado.name));
    console.log(auxFunciones);
    this._service.getEmpleadosByFunciones(auxFunciones).subscribe((res)=>{
      this.empleados=res;
    });
  }
}
