import { NgModule } from '@angular/core';
/** FormsModule se necesita importar para usar la directiva ngModel */
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BasicoComponent } from './ejemplos/basico/basico.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasicoComponent,
    NotFoundComponent,
    HomeComponent,
    ProductoComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  /** 
   * providers: Servicios en angular
   * son clases que tiene @Injectable()
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
