import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationExtras } from '@angular/router';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastr: ToastrService) { }
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 400:
              Swal.fire({
                icon: "error",
                title: ` `,
                text: error.error.message,
              });
              break;
            case 401:
              Swal.fire({
                icon: "error",
                title: "خطاء في تعديل البيانات ",
                text: error.error.message,
              });
              break;
            case 500:
              const navigationExtras: NavigationExtras = {
                state: { error: error.error },
              };
              break;
            default:
              Swal.fire({
                icon: "error",
                title: "خطاء ",
                text: 'something unexpected happened',
              });
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
