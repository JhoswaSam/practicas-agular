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

// ALMACEN 1
A001.ingresarProducto(P001);
A001.ingresarProducto(P002);
A001.ingresarProducto(P003);

A001.mostrarProducto();

// ALMACEN 2

A002.ingresarProducto(P001);
A002.ingresarProducto(P001);
A002.ingresarProducto(P001);

A002.mostrarProducto();

A001.moverProducto(P002,A002);
A001.moverProducto(P002,A002);
A002.mostrarProducto();

