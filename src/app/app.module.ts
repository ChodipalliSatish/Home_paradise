import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app.route';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';

import { RoutingComponents } from './app.route';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,     
     RoutingComponents
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
