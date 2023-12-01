import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Esame';
  User!: any;
  authService = inject(AuthService);

  ngOnInit() {
    this.authService.getUsers().subscribe({
    next: (res) =>{
      this.User = res;
      console.log(this.User);
    }});
  }

}
