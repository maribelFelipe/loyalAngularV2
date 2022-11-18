import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './product-detail/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User>{

  constructor( private httpClient : HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
    debugger;
    return this.httpClient.get<User>(`${environment.reqResBaseUrl}/unknown/2`);
  }
}
