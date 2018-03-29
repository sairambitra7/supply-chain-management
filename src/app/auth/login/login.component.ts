import { Component, OnInit } from '@angular/core';

// import { Router } from '@angular/router'
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'enter your email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  hide = true;

  getpasswordError() {
    return this.password.hasError('required') ? 'enter your password' :
      
            '';
  }
  
  
  
  

 

  

  

  

  constructor() { }

  ngOnInit() {
  }

}
