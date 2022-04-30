import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AppNavegate {
  constructor(private router: Router, private menu: MenuController) {}

  goToHome() {
    this.menu.enable(false);
    this.router.navigateByUrl('home');
  }

  goToSignup(){
    this.menu.enable(false);
    this.router.navigateByUrl('signup');
  }
  
}
