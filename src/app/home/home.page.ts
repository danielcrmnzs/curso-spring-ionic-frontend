import { CredenciaisDTO } from './../../models/credenciais.dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  creds: CredenciaisDTO = {
    email: '',
    senha: '',
  };

  constructor(private router: Router, public menu: MenuController) {}

  ngOnInit() {}

  login() {
    console.log(this.creds);    
    this.router.navigateByUrl('/categorias');
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
