import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './product-detail/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 /** private userInicial: User = {
    data: {
      avatar:'',
      email:'',
      id: 0,
      last_name: '',
      first_name: ''
    },
    support: {
      text: '',
      url: ''
    }
  };

  private user = new BehaviorSubject<User>(User); */ 
  
  private user = new BehaviorSubject<User>(null as unknown as User);
  private currentUser = this.user.asObservable();
  //ngrx

  constructor(private httpClient: HttpClient) { }

  getUser(id:number) : void {
    // hace busquedas
    // consultar el api > json >
    // cambiar el estado del user .next()
    
    this.httpClient.get<User>(`${environment.reqResBaseUrl}/users/${id}`)
      .subscribe(
          data => this.user.next(data)
      );

  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }
}
