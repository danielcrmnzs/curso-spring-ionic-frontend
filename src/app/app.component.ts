import { AppNavegate } from './app-navegate';
import { AuthService } from './services/auth.service';
import { MenuController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/profile', icon: 'person' },
    { title: 'Categorias', url: '/categorias', icon: 'layers' },
  ];
  public labels = [];
  constructor(
    private router: Router,
    private menu: MenuController,
    private authService: AuthService,
    private navegate: AppNavegate
  ) {}

  logout() {
    this.authService.logout();
  //  this.goToHome();
    this.navegate.goToHome();
  }


  // goToHome() {
  //   this.menu.enable(false);
  //   this.router.navigateByUrl('/home');
  // }
}
