import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CalenderComponent } from './calender/calender.component';
import { ProductsComponent } from './products/products.component';

import { CalenderService } from '../scm/calender/calender.service'
import { DashboardService } from '../scm/dashboard/dashboard.service'
import { ProductsService } from '../scm/products/products.service'
import { UsersService } from '../scm/users/users.service'

const routes: Routes = [
  
  { path: 'dashboard', component:DashboardComponent  },
];



@NgModule({
  declarations: [
    
    DashboardComponent,
    UsersComponent,
    CalenderComponent,
    ProductsComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [CalenderService,DashboardService,ProductsService,UsersService],
  
})
export class ScmModule { }