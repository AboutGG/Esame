import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{

  authService = inject(AuthService);
  Users!: User[];
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
    this.authService.getUsers().subscribe({
      next: (res) =>{
        this.Users = res;
        console.log(this.Users);
      }});
  }

  Submit(){
    this.Users.map(({email, password}) => {
      if (email === this.loginForm.value.email && password == this.loginForm.value.password)
        return console.log(true);
    })
  }
}
