import { API_CONFIG } from './../config/api.config';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public storage: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let LocalUser = this.storage.getLocalUser();

    let n = API_CONFIG.baseUrl.length;
    let requestToAPI = req.url.substring(0, n) == API_CONFIG.baseUrl;

    if (LocalUser && requestToAPI) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + LocalUser.token),
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
