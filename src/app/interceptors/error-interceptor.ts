import { FieldMessage } from './../models/field-message.dto';
import { StorageService } from './../services/storage.service';
import { Injectable, enableProdMode } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    public storage: StorageService,
    public alertCtrl: AlertController
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
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

        switch (errorObj.status) {
          case 401:
            this.handle_401();
            break;
          case 403:
            this.handle_403();
            break;
          case 422:
            this.handle_422(errorObj);
            break;
          default:
            this.handleDefaultError(errorObj);
        }

        return throwError(errorObj);
      })
    );
  }

  async handleDefaultError(errorObj) {
    const alert = await this.alertCtrl.create({
      header: 'Erro ' + errorObj.status + ': ' + errorObj.error,
      message: errorObj.message,
      backdropDismiss: false,
      buttons: [{ text: 'Ok' }],
    });
    await alert.present();
  }

  async handle_401() {
    const alert = await this.alertCtrl.create({
      header: 'Erro 401: falha de autenticação',
      message: 'Email ou senha incorretos',
      backdropDismiss: false,
      buttons: [{ text: 'Ok' }],
    });
    await alert.present();
  }

  handle_403() {
    this.storage.setLocalUser(null);
  }

  async handle_422(errorObj) {
    const alert = await this.alertCtrl.create({
      header: 'Erro 422: Validação',
      message: this.listErrors(errorObj.errors),
      backdropDismiss: false,
      buttons: [{ text: 'Ok' }],
    });
    await alert.present();
  }

  private listErrors(messages: FieldMessage[]): string {
    let s: string = '';
    for (var i = 0; i < messages.length; i++) {
      s =
        s +
        '<p><strong>' +
        messages[i].fieldName +
        '</strong>: ' +
        messages[i].message +
        '</p>';
    }
    return s;
  }
}
