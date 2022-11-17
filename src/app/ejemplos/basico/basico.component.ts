import { Component } from '@angular/core';
import { LoginService } from '../../login.service';

export interface Lenguaje {
  name: string
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})

export class BasicoComponent {
  title: string = 'EJEMPLO BASICO';
  mostrarTexto: boolean = true;
  lenguajes : Lenguaje [] = [
    {
      id: 1,
      name : 'Java'
    },
    {
      id: 2,
      name : 'Js'
    },
    {
      id: 3,
      name : 'Angular'
    }
  ];

  showLogin: boolean = true;

  getTitle() : string {
    return this.title;
  }

  // Va a cambiar el valor del booleano
  cambiar() : void {
    debugger; // Para poder depurar en la consola del navegador
    this.mostrarTexto = ! this.mostrarTexto
  }

  mostrarLogin() : void {
    this.showLogin = true;
  }

  ocultarLogin(): void {
    this.showLogin = false;
  }

  recibirMensaje(event:any){
    debugger;
    alert(event);
  }
}
