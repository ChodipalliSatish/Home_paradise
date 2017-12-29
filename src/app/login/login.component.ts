import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styles: [`
  input.ng-invalid {border-left: 5px solid red;}
  input.ng-valid {border-left: 5px solid green;}
   `]
})
export class LoginComponent  {
loginForm = new FormGroup({
  username : new FormControl('Admin', [Validators.required]),
  password : new FormControl('Admin', [Validators.required]),   
});
onSubmit() {
  console.log(this.loginForm.value);
}
}

