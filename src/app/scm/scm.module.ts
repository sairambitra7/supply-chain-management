import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CalenderComponent } from './calender/calender.component';
import { ProductsComponent } from './products/products.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';

import { CalenderService } from '../scm/calender/calender.service'
import { DashboardService } from '../scm/dashboard/dashboard.service'
import { ProductsService } from '../scm/products/products.service'
import { UsersService } from '../scm/users/users.service';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  
  { path: 'dashboard', component:DashboardComponent,children :[
  { path: 'calender', component:CalenderComponent  },
  { path: 'products', component:ProductsComponent  },
  { path: 'users', component:UsersComponent},
    { path: 'userprofile', component:UserprofileComponent  },
  { path: 'dashboardhome', component:DashboardhomeComponent  },
  { path: 'personaldetails', component:PersonaldetailsComponent  },
  { path: 'userregistration', component:UserregistrationComponent}
 
    
  
]},
  
  
];



@NgModule({
  declarations: [
    
    DashboardComponent,
    UsersComponent,
    CalenderComponent,
    ProductsComponent,
    DashboardhomeComponent,
    PersonaldetailsComponent,
    UserregistrationComponent,
    UserprofileComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    
  ],
  providers: [CalenderService,DashboardService,ProductsService,UsersService],
  
})
export class ScmModule { 
  Viewdetails(item){
    console.log(item)
  }
}