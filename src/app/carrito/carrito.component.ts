import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Videojuego } from '../model/videojuego';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule, NgFor],  //Se importa FormsModule para poder usar ngModel en el html, si quieres usar ngFor importalo
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent {
  info: string = '';
  nombre: string = '';
  direccion: string = '';

  videojuegoPrueba: Videojuego = {} as Videojuego;
  listadoVideojuegos: Videojuego[] = {} as Videojuego[];

  constructor() {
    this.videojuegoPrueba.nombre = 'nombrePrueba';
    this.videojuegoPrueba.descripcion = 'descripcion de prueba';
    this.videojuegoPrueba.precio = 33.33;
    this.listadoVideojuegos = [
      {id: 1, nombre: "nombre1", descripcion: "desc1", precio: 11.11},
      {id: 2, nombre: "nombre2", descripcion: "desc2", precio: 22.22},
      {id: 3, nombre: "nombre3", descripcion: "desc3", precio: 33.33}
    ]
    this.listadoVideojuegos.push(this.videojuegoPrueba);
  }

  realizarPedido(): void {
    //TODO
  }
  mostrarDatos(): void {
    this.info = this.videojuegoPrueba.descripcion!;
  }
}
