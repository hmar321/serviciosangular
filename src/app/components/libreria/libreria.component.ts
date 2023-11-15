import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements OnInit {
  public comics!: Array<Comic>;
  public comicFavorito!: Comic;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaimagen") cajaimagenRef!: ElementRef;
  @ViewChild("cajadescripcion") cajadescripcionRef!: ElementRef;

  //EN LOS CONSTRUCTORES SOLAMENTE SE UTILIZA LA
  //INYECION, NO LOS OBJETOS QUE RECIBE. LAS ACCIONES
  //SE SUELEN REALIZAR DENTRO DE ngOnInit
  constructor(private _comicsService: ComicsService) { }

  ngOnInit(): void {
    this.comics = this._comicsService.getComics();
  }

  seleccionarFavorito(event: Comic): void {
    this.comicFavorito = event;
  }

  eliminarComic(event: number): void {
    this.comics.splice(event, 1);
  }

  insertarComic(): void {
    var titulo = this.cajaNombreRef.nativeElement.value;
    var imagen = this.cajaimagenRef.nativeElement.value;
    var descripcion = this.cajadescripcionRef.nativeElement.value;
    var newComic = new Comic(titulo, imagen, descripcion);
    this.comics.push(newComic);
  }

  modificarComic(event: number): void {
    var titulo = this.cajaNombreRef.nativeElement.value;
    var imagen = this.cajaimagenRef.nativeElement.value;
    var descripcion = this.cajadescripcionRef.nativeElement.value;
    this.comics[event] = new Comic(titulo, imagen, descripcion);

  }
}
