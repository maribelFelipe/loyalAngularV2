import { Injectable } from '@angular/core';

export interface Producto {
  id: number,
  titulo: string,
  precio: number,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export default class ProductoService {

  private productos : Producto[] = [] ;

  constructor() { 
    this.productos.push(
      {
        id: Math.random(),
        titulo: "PRODUCTO",
        precio: Math.floor(1 + Math.random()),
        url: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/699592.jpg'
      },
      {
        id: Math.random(),
        titulo: "PRODUCTO 2",
        precio: Math.floor(1 + Math.random()),
        url: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/699593.jpg'
      },
      {
        id: Math.random(),
        titulo: "PRODUCTO 3",
        precio: Math.floor(1 + Math.random()),
        url: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/699594.jpg'
      },
    );
  }

  getProductos() : Producto[] {
    return this.productos;
  }
}
