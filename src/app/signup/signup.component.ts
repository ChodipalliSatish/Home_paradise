import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [`
    input.ng-invalid {border-left: 5px solid red;}
    input.ng-valid {border-left: 5px solid green;}
  `]
})
export class SignupComponent  {
  signupForm = new FormGroup({
    username : new FormControl('Name', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
    password : new FormControl(),    
    email: new FormControl(null, [Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')]),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl('', Validators.pattern('[0-9]{5}'))
    })
  });
  onSubmit() {
    console.log(this.signupForm.value);
  }
}
