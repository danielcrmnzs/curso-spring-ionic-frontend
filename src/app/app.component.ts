import { MenuController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [{ title: 'Home', url: '/home', icon: 'home' }];
  public labels = [];
  constructor(private router: Router, private menu: MenuController) {}

  goToHome() {
    this.menu.enable(false);
    this.router.navigateByUrl('/home');
  }
}
