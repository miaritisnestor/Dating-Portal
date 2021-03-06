import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://localhost:64292/api/auth/";

  constructor(private http: HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl + 'login', model).pipe(map(res => {
      const user = res as any;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    }))
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'register', model)
  }

}
