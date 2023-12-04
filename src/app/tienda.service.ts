import { Injectable } from '@angular/core';
import { Videojuego } from './model/videojuego';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  constructor() {}

  prueba: Videojuego[] = {} as Videojuego[];

  obtenerVideojuegos(): Videojuego[] {
    this.prueba = [
      { id: 1, nombre: 'nombre1', descripcion: 'desc1', precio: 11.11 },
      { id: 2, nombre: 'nombre2', descripcion: 'desc2', precio: 22.22 },
      { id: 3, nombre: 'nombre3', descripcion: 'desc3', precio: 33.33 }
    ];

    return this.prueba;
  }
}
