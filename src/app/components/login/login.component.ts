import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    authService = inject(AuthService);
    Users!: User[];
    loginForm = new FormGroup({
        email: new FormControl('', Validators.email),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
    });

    ngOnInit() {
        this.authService.getUsers().subscribe({
            next: (res) => {
                this.Users = res;
                console.log(this.Users);
            }
        });
    }

    Submit() {
        this.Users.map(({email, password}) => {
            if (email === this.loginForm.value.email && password == this.loginForm.value.password)
                return console.log(true);
        })
    }
}
