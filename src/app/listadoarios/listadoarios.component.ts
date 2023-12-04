import { Component } from '@angular/core';
import { TiendaService } from '../tienda.service';
import { Videojuego } from '../model/videojuego';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listadoarios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listadoarios.component.html',
  styleUrl: './listadoarios.component.css',
})
export class ListadoariosComponent {
  videojuegos: Videojuego[] = {} as Videojuego[];
  constructor(private servicioTienda: TiendaService) {
    //Desde cuanquier componente puedo pedir cualquier servicio a traves del constructor
  }

  ngOnInit(): void {
    //Metodo que se ejecutauna vez el componente est ya preparado
    this.videojuegos = this.servicioTienda.obtenerVideojuegos();
  }
}
