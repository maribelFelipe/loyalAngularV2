import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../product-detail/user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  user? : User;
  userForm : FormGroup = this.formBuilder.group(
    {
      //id: ['',Validators.required]
      id: [''],
      email: [''],
      firstName: [''],
      lastName: ['']
    }
  )

  constructor(
    private us: UserService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {

    this.us.getCurrentUser().subscribe(
      data => {
        this.user = data
        // Actualizar campos del formulario
        this.userForm.patchValue({
          id: data.data.id,
          email: data.data.email,
          firstName: data.data.first_name,
          lastName: data.data.last_name
        })
      }
    )
  }

  onSubmit(){
    
  }

}
