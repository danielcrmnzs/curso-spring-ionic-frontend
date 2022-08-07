import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonLoadingService {
  constructor(public loadingController: LoadingController) { }

  async showLoading(msg: string = "Aguarde...") {
    const loading = await this.loadingController.create({
      message: msg,
      //duration: 3000,
      cssClass: 'custom-loading',
    });

    loading.present();
  }

  dismissLoading(tempoDeEspera: number = 300) {
    setTimeout(() => {
      this.loadingController.dismiss()
        .catch((err) => {
          console.log('Ocorreu um erro: ', err);
        });
    }, tempoDeEspera);

  }

  autoLoading(duracao: number = 3000) {
    this.loadingController.create({
      message: `Aguarde por ${duracao / 1000} segundos`,
      duration: duracao
    }).then((response) => {
      response.present();
      response.onDidDismiss().catch((response) => {
        console.log('Autoloading dispensado ', response);
      });
    });
  }
}