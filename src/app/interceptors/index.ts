/* "Barrel" of Http Interceptors */
import { ErrorInterceptor } from './error-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/** Http interceptor providers in outside-in order */
export const errorInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
