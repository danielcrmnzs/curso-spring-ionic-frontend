import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Passou no Interceptor');
    return next.handle(req).pipe(
      catchError((err) => {
        let errorObj = err;

        if (errorObj.error) {
          errorObj = errorObj.error;
        }
        if (!errorObj.status) {
          errorObj = JSON.parse(errorObj);
        }

        console.log('Erro detectado pelo interceptor:');
        console.log(errorObj);

        return throwError(errorObj);
      })
    );
  }
}
