import { NgModule } from '@angular/core';
/** FormsModule se necesita importar para usar la directiva ngModel */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BuscarComponent } from './buscar/buscar.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasicoComponent,
    NotFoundComponent,
    HomeComponent,
    ProductoComponent,
    ProductDetailComponent,
    BuscarComponent,
    ResultadoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  /** 
   * providers: Servicios en angular
   * son clases que tiene @Injectable()
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
