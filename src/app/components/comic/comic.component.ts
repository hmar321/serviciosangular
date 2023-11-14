import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Input() index!: number;
  @Output() favorito: EventEmitter<Comic> = new EventEmitter();
  @Output() eliminar: EventEmitter<number> = new EventEmitter();
  @Output() modificar: EventEmitter<number> = new EventEmitter();

  enviarFavorito(): void {
    this.favorito.emit(this.comic);
  }

  deleteComic():void{
    this.eliminar.emit(this.index);
  }

  modificarComic():void{
    this.modificar.emit(this.index);
  }
}
