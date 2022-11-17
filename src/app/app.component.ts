import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'INICIO';

  constructor(private router: Router){}

  // Ir a /producto/1 -> routerLink
  /**
   * path: 'producto/:id', component: ProductoComponent
   * this.router.navigate(['/producto', '1'])
   * 
   * path: 'producto/:id/:id2/:otro', component: ProductoComponent
   * this.router.navigate(['/producto', '1', '2', '3'])
   */
  navegarPorTS() : void {
    this.router.navigate(['/producto2', '2', 'ASC'])
  }

}
