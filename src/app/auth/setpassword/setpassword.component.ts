import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {

  setpassword = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('',[Validators.required]);
  getErrorMessage() {
    return this.setpassword.hasError('required') ? 'set your password' :
        // this.setpassword.hasError('setpassword') ? 'Not a valid email' :
            '';
  }

  getpasswordError() {
    return this.confirmpassword.hasError('required') ? 'confirm your password' :
        this.confirmpassword.hasError('confirmpassword') ? 'Not a valid password' :

      
            '';
  }
  hide = true; 

  constructor() { }

  ngOnInit() {
  }

}
