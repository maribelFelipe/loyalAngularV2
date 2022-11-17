import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductoService, { Producto } from '../producto-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productId? : number;
  id? : number;

  //   * array de productos para mostrarlos en la vista
  productos : Producto[] = [];

  /**
   * Capturar parametros 
   * 
   * @param activedRoute 
   */
  constructor(
    private activedRoute: ActivatedRoute,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {

    /**
     * SNAPSHOT
     * Parametros de la ruta ej. http://localhost:4200/producto2/1/ASC
     * muestra por consola: {id: '1', order: 'ASC'}
     * */ 
    console.log(this.activedRoute.snapshot.params);

    const id = this.activedRoute.snapshot.params['id'];
    this.id = id;
    //alert(id);

    /**
     * OBSERVABLE
     * */
    this.productos = this.productoService.getProductos();
  }

  cargarDetalle(id: number): void {
    this.productId = id;
  }



}
