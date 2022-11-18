import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const datosDelProfile = this.activatedRoute.snapshot.data['datosDelProfile'];
    console.log(datosDelProfile);
  }

}
