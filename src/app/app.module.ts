import { NgModule } from '@angular/core';
/** FormsModule se necesita importar para usar la directiva ngModel */
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  /** 
   * providers: Servicios en angular
   * son clases que tiene @Injectable()
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
