import { AuthService } from './../../services/auth.service';
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

  constructor(
    private router: Router,
    public menu: MenuController,
    public auth: AuthService
  ) {}

  ngOnInit() {}

  login() {
    this.auth.authenticate(this.creds).subscribe(
      (response) => {
        this.auth.successfullLogin(response.headers.get('Authorization'));
        this.router.navigateByUrl('/categorias');
      },
      (error) => {}
    );
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
