import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userToken : string;
  constructor() { }

  getToken (){
    this.userToken=localStorage.getItem('token');
    return this.userToken;
  }

  setToken (token:any){
    
     return localStorage.setItem('token',JSON.stringify(token));
  }
}
