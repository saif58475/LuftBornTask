import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {
  Token=localStorage.getItem('CamelgateAuthorization') 
  constructor(public _Router: Router) {
    
   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      
  if (localStorage.getItem('Authorization') ==null) {
    this._Router.navigate(['/']);    
  } else {
    return true
  }
  }
  
  
}
