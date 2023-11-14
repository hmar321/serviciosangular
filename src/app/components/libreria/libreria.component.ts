import { Component, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent {
  public comics!: Array<Comic>;
  public comicFavorito!: Comic;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaimagen") cajaimagenRef!: ElementRef;
  @ViewChild("cajadescripcion") cajadescripcionRef!: ElementRef;

  constructor() {
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new Comic(
        "Avengers",
        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
        "Los Vengadores"
      ),
      new Comic(
        "Spawn",
        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
        "Todd MacFarlane"
      )
    ];
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
    this.comics[event] = new Comic(titulo, imagen, descripcion)

  }
}
