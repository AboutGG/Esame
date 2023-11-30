import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  // showInvalidInput: boolean = false;
  // passwordInputType: string = 'password';

  // showPassword() {
  //   this.passwordInputType === 'password'
  //     ? (this.passwordInputType = 'text')
  //     : (this.passwordInputType = 'password');
  // }

  Submit() {
    console.log(this.loginForm.value);
  }
}
