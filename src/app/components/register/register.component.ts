import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisterRequestPayload} from './register.request.payload';
import {AutherizerService} from '../service/autherizer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerRequestPayload: RegisterRequestPayload;
  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor(private formBuilder: FormBuilder, private autherizer: AutherizerService,
              private router: Router) {
    this.registerRequestPayload = {
      username: '',
      password: '',
      email: ''
    };
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      register_username: '',
      register_password: '',
      register_email: ''
    });
  }

  register(): void{
    this.registerRequestPayload.username = this.registerForm.get('register_username').value;
    this.registerRequestPayload.password = this.registerForm.get('register_password').value;
    this.registerRequestPayload.email = this.registerForm.get('register_email').value;
    console.log(this.registerRequestPayload);

    this.autherizer.registerAccount(this.registerRequestPayload).
      subscribe(data => {
        /*this.router.navigate(['/login']);*/
        console.log(data);
    });
  }
}
