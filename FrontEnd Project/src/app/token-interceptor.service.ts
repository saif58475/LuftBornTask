
import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    let token = localStorage.getItem('Authorization');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(req);
  }
}
