import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {NavbarSecondComponent} from "./components/navbar-second/navbar-second.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "navbar", component: NavbarSecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
