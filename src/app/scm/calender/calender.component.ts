import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor(private router: Router) { }
  list = [
    {
      id:1,
      imagepath:"/assets/milk.png",
      title: "Full Cream Milk",
      packs:"205 Packs 1LR",
      brand:"Heritage",
      price:"$1243/-",
    },
    {
      id:2,
      imagepath:"/assets/milk.png",
      title: "Full Cream Milk",
      packs:"305 Packs 2LR",
      brand:"Heritage",
      price:"$1114/-",
    },
    {
      id:3,
      imagepath:"/assets/milk.png",
      title: "Full Cream Milk",
      packs:"405 Packs 3LR",
      brand:"Heritage",
      price:"$2233/-",
    }
  ]


  ngOnInit() {
  }

}
