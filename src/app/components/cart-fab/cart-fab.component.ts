import { AppNavegate } from './../../app-navegate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-fab',
  templateUrl: './cart-fab.component.html',
  styleUrls: ['./cart-fab.component.scss'],
})
export class CartFabComponent implements OnInit {
  constructor(private navegate: AppNavegate) {}

  ngOnInit() {}

  goToCart() {
    this.navegate.goToCart();
  }
}
