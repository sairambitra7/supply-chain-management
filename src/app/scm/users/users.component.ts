import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  constructor(private router: Router) { }

  cardlist = [
    {
      id: 1,
      name: "John",
      phone:"8977526526",
      gmail:"john@gmail.com",
      address:"1st Floor, Plot No: 6-11, Survey No. 40, Above Andhra Bank,Khajaguda,Near Delhi Public School, Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana 500089",
      paymentdue:"Payments Due",
      rupee:"$1500"
    },
    {
      id: 2,
      name: "Tom",
      phone:"8977888888",
      gmail:"tom@gmail.com",
      address:"1st Floor, Plot No: 6-11, Survey No. 40, Above Andhra Bank,Khajaguda,Near Delhi Public School, Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana 500089",
      paymentdue:"Payments Due",
      rupee:"$1600"
    },
    {
      id: 3,
      name: "Jonny",
      phone:"8977666666",
      gmail:"jonny@gmail.com",
      address:"1st Floor, Plot No: 6-11, Survey No. 40, Above Andhra Bank,Khajaguda,Near Delhi Public School, Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana 500089",
      paymentdue:"Payments Due",
      rupee:"$1700"
    },
    {
      id: 4,
      name: "Nick",
      phone:"8977555555",
      gmail:"nick@gmail.com",
      address:"1st Floor, Plot No: 6-11, Survey No. 40, Above Andhra Bank,Khajaguda,Near Delhi Public School, Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana 500089",
      paymentdue:"Payments Due",
      rupee:"$1800"
    },
    {
      id: 5,
      name: "Micky",
      phone:"8988888888",
      gmail:"micky@gmail.com",
      address:"1st Floor, Plot No: 6-11, Survey No. 40, Above Andhra Bank,Khajaguda,Near Delhi Public School, Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana 500089",
      paymentdue:"Payments Due",
      rupee:"$1900"
    },
  ]


  ngOnInit() {
  }

  onSelect(item:any){
    this.router.navigate(['dashboard/userprofile'], {queryParams: {'id': item.id}});
    console.log(item);
  }

}
