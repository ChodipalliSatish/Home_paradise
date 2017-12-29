import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MenuComponent } from './menu/menu.component';
import { CateringComponent } from './catering/catering.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  {path: 'Menu', component: MenuComponent},
  {path: 'Catering', component: CateringComponent},
  {path: 'Signup', component: SignupComponent},
  {path: 'Login', component: LoginComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule {}
export const RoutingComponents = [HomeComponent, MenuComponent, CateringComponent, SignupComponent, LoginComponent]
