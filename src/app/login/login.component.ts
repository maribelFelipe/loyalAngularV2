import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  //Para recibir el valor como parametro
  //Los parametros no pueden usarse en el constructor porque no existiran aun
  @Input() user?: string;

  //Parametros que envia este componente al 
  @Output() 
  informarAlPadre = new EventEmitter<string>();

  username?: string;

  constructor(loginService: LoginService) {
    console.log('Creando logincomponent con login server');
    console.log(loginService.getName());
   }

  ngOnInit(): void {
    //this.username = `${Math.random()}`;
    //debugger;
    this.username = this.user;
  }

  ngOnDestroy(): void {
    //alert('Se destruye')
  }

  emitirAlPadre(){
    // emitimos el mensaje al padre
    this.informarAlPadre.emit(this.username);
  }

}
