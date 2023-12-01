import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegistrationComponent} from './components/registration/registration.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarSecondComponent } from './components/navbar-second/navbar-second.component';
import { NavbarFirstComponent } from './components/navbar-first/navbar-first.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        NavbarSecondComponent,
        NavbarFirstComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
