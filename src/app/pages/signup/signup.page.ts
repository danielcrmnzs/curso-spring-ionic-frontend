import { MenuController } from '@ionic/angular';
import { AppNavegate } from './../../app-navegate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public tipoPessoa: string = "1";
  
  constructor(private navegate: AppNavegate, public menu: MenuController) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  signupUser() {
    console.log('Enviou o form!');
  }

  goToHome() {
    this.navegate.goToHome();
  }
}
