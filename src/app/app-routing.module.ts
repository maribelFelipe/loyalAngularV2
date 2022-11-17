import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './ejemplos/basico/basico.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductoComponent } from './producto/producto.component';

/**
 * Las rutas pueden ir con varios parametros
 * la ruta tendra que llevar todos los parametros
 * path: 'producto/:id/:id2', component: ProductoComponent
 * 
 * El path '**' tiene que ir el ultimo
 * 
 */
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'basico', component: BasicoComponent
  },
  {
    path: 'productos', component: ProductoComponent
  },
  {
    path: 'producto2/:id/:order', component: ProductoComponent
  },
  {
    path: 'detalle/:id', component: ProductDetailComponent
  },
  {
    path: '**', component: NotFoundComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
