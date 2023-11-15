import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { CochesComponent } from "./components/coches/coches.component";
import { PlantillaComponent } from "./components/plantilla/plantilla.component";
import { EmpleadosComponent } from "./components/empleados/empleados.component";

const rutas: Routes = [
    { path: "", component: HomeComponent },
    { path: "libreria", component: LibreriaComponent },
    { path: "personas", component: PersonasapiComponent },
    { path: "coches", component: CochesComponent },
    { path: "plantilla", component: PlantillaComponent },
    { path: "empleados", component: EmpleadosComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);