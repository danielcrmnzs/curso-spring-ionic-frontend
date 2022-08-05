import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AppNavegate {
  constructor(private router: Router, private menu: MenuController) { }

  goToCart() {
    this.router.navigateByUrl('cart');
  }

  setRootToCart() {
    this.router.navigateByUrl('cart',
      {
        replaceUrl: true, // impede que, após a confirmação, o botão voltar retorne para a pagina de confirmação
      });
  }

  goToCategorias() {
    this.router.navigateByUrl('categorias');
  }

  setRootToCategorias() {
    this.router.navigateByUrl('categorias',
      {
        replaceUrl: true, // impede que, após a confirmação, o botão voltar retorne para a pagina de confirmação
      });
  }

  goToHome() {
    this.menu.enable(false);
    this.router.navigateByUrl('home');
  }

  setRootToHome() {
    this.menu.enable(false);
    this.router.navigateByUrl('home',
      {
        replaceUrl: true, // impede que, após a confirmação, o botão voltar retorne para a pagina de confirmação
      });
  }

  goToSignup() {
    this.menu.enable(false);
    this.router.navigateByUrl('signup');
  }

  goToPickAdress() {
    this.router.navigateByUrl('pick-adress');
  }

}
