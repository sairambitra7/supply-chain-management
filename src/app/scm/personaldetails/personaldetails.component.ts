import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  phnno = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  community = new FormControl('', [Validators.required]);
  subcommunity = new FormControl('', [Validators.required]);
  flatno = new FormControl('', [Validators.required]);
  locality = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  postal = new FormControl('', [Validators.required]);
  
 
  getErrorMessage() {
    return this.email.hasError('required') ? 'enter your Email' :'';
  }  
  
  getphnnoError(){
    return this.phnno.hasError('required') ? 'enter your Phone no' :'';
  }

  getnameError(){
    return this.name.hasError('required') ? 'enter your Name' :'';
  }

  getcomError(){
    return this.community.hasError('required') ? 'enter your Community' :'';
  }

  getsubcomError(){
    return this.subcommunity.hasError('required') ? 'enter your Sub-Community' :'';
  }

  getflatnoError(){
    return this.flatno.hasError('required') ? 'enter your Flat-No' :'';
  }

  getlocError(){
    return this.locality.hasError('required') ? 'Locality Required' :'';
  }

  getcityError(){
    return this.city.hasError('required') ? 'City Required' :'';
  }

  getstateError(){
    return this.state.hasError('required') ? 'State Required' :'';
  }

  getpostError(){
    return this.postal.hasError('required') ? 'Postal Code Required' :'';
  }

  
            
  
  constructor() { }

  ngOnInit() {
  }

}
