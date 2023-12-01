import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authClient= inject(HttpClient);

  addUser(dio:any): Observable<any>{
    return this.authClient.post("http://localhost:3000/users", dio)
        .pipe(
            catchError(err => {
              if (err.status !== 200) {
                console.error('Errore:', err);
                throw new Error('Errore durante la richiesta, status');
              } else {
                console.error('Altro errore:', err);
                throw new Error('Errore durante la richiesta');
              }
            })
        );
  }

  getUsers(): Observable<User[]>{
    return this.authClient.get<User[]>("http://localhost:3000/users");
  }
}
