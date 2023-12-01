import {Component, inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  authService = inject(AuthService);

  registrationForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  Submit(){
    this.authService.addUser(this.registrationForm.value).subscribe({
    })
  }
}
