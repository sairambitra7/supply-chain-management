import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



import { LoginComponent } from './login/login.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';

import { AuthService } from '../auth/auth.service'

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'setpassword', component: SetpasswordComponent}
];



@NgModule({
  declarations: [
    
    LoginComponent,
    SetpasswordComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatCardModule,
    MatInputModule,FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    
    
    
  ],
  
  
  
  providers: [AuthService],
  
})
export class AuthModule { }