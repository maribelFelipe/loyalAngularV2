import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PuedeDesactivar } from '../can-deactivated-guard.service';
import { UserService } from '../user.service';
import { User } from './user-dto';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, PuedeDesactivar {

  user?: User;

  constructor(private activedRoute: ActivatedRoute,
    //private httpClient : HttpClient
    private userService : UserService) { 
    }


  ngOnInit(): void {
    
    const id : number = this.activedRoute.snapshot.params['id'];

    // ir a buscar el detalle usando el httpclient
    // ARMAR LA URL DEL RECURSO
    // https://reqres.in/api/users/2
    /** this.httpClient.get<User>(`${environment.reqResBaseUrl}/users/${id}`)
      .subscribe(
        data => {
          this.user = data;
        }
    ); */

    /**
     * Llamada a traves del observable del servicio userService
     * 
     * 1. Busqueda (getUser)
     * 2. Actualizar el cambio (getCurrentUser)
     * 
     *  */ 
    this.userService.getUser(id);

    this.userService.getCurrentUser().subscribe(
      data => this.user = data
    )

  }

  submitForm(formulario: NgForm) {
    console.log(formulario);
  
  }


  permitirSalir(): boolean | Observable<boolean> | Promise<boolean> {
    return confirm('Desea salir?'); //true|false
  }

}
