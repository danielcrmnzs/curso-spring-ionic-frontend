import { AppNavegate } from './../../app-navegate';
import { ProdutoDTO } from './../../models/produto.dto';
import { CarrinhoService } from './../../services/domain/carrinho.service';
import { API_CONFIG } from './../../config/api.config';
import { ProdutoService } from './../../services/domain/produto.service';
import { CartItem } from './../../models/cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items: CartItem[];

  constructor(
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutoService,
    private navegate: AppNavegate
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    let cart = this.carrinhoService.getCart();
    this.items = cart.items;
    this.loadImageUrls();
  }

  loadImageUrls() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      this.produtoService.hasSmallImageFromBucket(item.produto.id).subscribe(
        (response) => {
          item.produto.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${item.produto.id}-small.jpg`;
        },
        (error) => {}
      );
    }
  }

  removeItem(produto: ProdutoDTO) {
    this.items = this.carrinhoService.removeProduto(produto).items;
  }

  increaseQuantity(produto: ProdutoDTO) {
    this.items = this.carrinhoService.increaseQuantity(produto).items;
  }

  decreaseQuantity(produto: ProdutoDTO) {
    this.items = this.carrinhoService.decreaseQuantity(produto).items;
  }

  total(): number {
    return this.carrinhoService.total();
  }

  navegateToCategorias() {
    this.navegate.goToCategorias();
  }

  checkout(){
    this.navegate.goToPickAdress();
  }

}
