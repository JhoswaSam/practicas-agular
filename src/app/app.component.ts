import { Component } from '@angular/core';
import Almacen from './clases';
import { producto } from './clases';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-proyecto2';
}

/**
 * ALMACENES
 */

const A001 : Almacen = new Almacen(
  "A001",
  "Almacen Dora",
  []
);

const A002 : Almacen = new Almacen(
  "A002",
  "Almacen Kevin",
  []
);

const A003 : Almacen = new Almacen(
  "A003",
  "Almacen Eduardo",
  []
);

const A004 : Almacen = new Almacen(
  "A004",
  "Almacen Kelma",
  []
);

/**
 * PRODUCTOS
 */

const P001 :  producto = {
  codigoP : "P001",
  nombreP : "gelatina roja"
}

const P002 : producto = {
  codigoP : "P002",
  nombreP : "gelatina verde"
}

const P003 : producto = {
  codigoP : "P003",
  nombreP : "gelatina amarilla"
}

const P004 : producto = {
  codigoP : "P004",
  nombreP : "gelatina azul"
}


/**
 * CONSULTAS
 */

// ALMACEN 1 INGRESAR PRODUCTOS
A001.ingresarProducto(P001);//Roja
A001.ingresarProducto(P002);//verde
A001.ingresarProducto(P003);//amarilla

// MOSTRAMOS ALMACEN
A001.mostrarProducto();

// ALMACEN 2 INGRESAR PRODUCTOS
A002.ingresarProducto(P001);
A002.ingresarProducto(P001);
A002.ingresarProducto(P001);

//MOSTRANOS ALMACEN
A002.mostrarProducto();

//ACCION MOVER PRODUCTOS ENTRE ALMACEN (1) 
A001.moverProducto(P002,A002);
A001.moverProducto(P002,A002);

//A002.mostrarProducto();

//ACCION MOVER PRODUCTOS ENTRE ALMACEN (*)
A002.moverProductoCantidad(P001,A001,4);

//MOSTRAR INVENTARIO CON CANTIDAD
A001.mostrarInventario();

//MODIFICAR INVENTARIO 
A001.modificarInventario("R",P003,3);
