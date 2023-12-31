import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "./components/login/login.component";
import { RegistrationComponent} from "./components/registration/registration.component";
import { NavbarFirstComponent } from './components/navbar-first/navbar-first.component';
import { SearchComponent } from './components/search/search.component';
import {NavbarSecondComponent} from "./components/navbar-second/navbar-second.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'navbar-first', component: NavbarFirstComponent },
  { path: 'search', component: SearchComponent },
  { path: "navbar", component: NavbarSecondComponent },
  { path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
