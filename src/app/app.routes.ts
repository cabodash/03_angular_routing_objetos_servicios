import { Routes } from '@angular/router';
import { ListadoariosComponent } from './listadoarios/listadoarios.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
    {path: "listado", component: ListadoariosComponent },
    {path: "carrito", component: CarritoComponent }
];
