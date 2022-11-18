import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PuedeDesactivar } from '../can-deactivated-guard.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit, PuedeDesactivar {

  public idUsuario : string = null as unknown as string;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  buscar(form: NgForm): void {
    // ejecutar la busqueda
    this.idUsuario = form.controls['clave'].value;
    this.userService.getUser(+this.idUsuario);
  }

  permitirSalir(): boolean | Observable<boolean> | Promise<boolean> {
    return confirm('Desea salir?'); //true|false
  }

}
