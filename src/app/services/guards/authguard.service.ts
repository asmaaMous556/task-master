import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
userToken :any;
  constructor(private router :Router,private auth:AuthService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(!this.auth.getToken()){
      this.router.navigate(['/']);
      return false;
    }
    else{
    return true 
    }
  }
 
}
