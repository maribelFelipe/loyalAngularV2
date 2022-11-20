import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../product-detail/user-dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  datosDelProfile: User | undefined; 
  
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.datosDelProfile = this.activatedRoute.snapshot.data['datosDelProfile'];
    console.log(this.datosDelProfile);
  }

}
