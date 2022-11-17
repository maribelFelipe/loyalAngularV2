import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  producto?: string;

  constructor(private activedRoute: ActivatedRoute,
    private httpClient : HttpClient) { 
    }

  ngOnInit(): void {
    // ir a buscar el detalle usando el httpclient (por ahora!)
    const id = this.activedRoute.snapshot.params['id'];

    // ARMAR LA URL DEL RECURSO
    // https://reqres.in/api/users/2
    this.httpClient.get(`${environment.reqResBaseUrl}/users/${id}`)
      .subscribe(
        data => {
          this.producto = JSON.stringify(data);
        }
    );


  }

}
