import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  hide = true;
  hide1=true;

  email = new FormControl('', [Validators.required, Validators.email]);
  mobile = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required]);
  pass1 = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'enter your Email' :'';
  }  
  
  getphnnoError(){
    return this.mobile.hasError('required') ? 'enter your Phone no' :'';
  }

  getnameError(){
    return this.name.hasError('required') ? 'enter your Name' :'';
  }

  getpassError(){
    return this.pass.hasError('required') ? 'Required Password' :'';
  }

  getpass1Error(){
    return this.pass1.hasError('required') ? 'Required Password' :'';
  }
  constructor() { }

  ngOnInit() {
  }

}
