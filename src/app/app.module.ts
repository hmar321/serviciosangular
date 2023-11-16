import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { ComicsService } from './services/comics.service';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProviders, routing } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasService } from './services/personas.service';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesComponent } from './components/coches/coches.component';
import { CochesService } from './services/coches.service';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { PlantillaService } from './services/plantilla.service';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { MultipleComponent } from './components/multiple/multiple.component';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent,
    HomeComponent,
    MenuComponent,
    PersonasapiComponent,
    CochesComponent,
    PlantillaComponent,
    EmpleadosComponent,
    MultipleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    MultiSelectModule,
  ],
  providers: [
    ComicsService,
    appRoutingProviders,
    PersonasService,
    CochesService,
    PlantillaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
