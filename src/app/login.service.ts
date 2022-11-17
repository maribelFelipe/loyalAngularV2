import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private name : string = 'login service!!!!'

  constructor() { }

  getName() : string {
    return this.name;
  }
}
