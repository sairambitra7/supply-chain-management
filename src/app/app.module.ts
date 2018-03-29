import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module'
import { ScmModule } from './scm/scm.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    ScmModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
