import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authClient= inject(HttpClient);

  addUser(dio:any){
    this.authClient.post("http://localhost:3000/users", dio);
  }

  getUsers(): Observable<any>{
    return this.authClient.get("http://localhost:3000/users");
  }
}
