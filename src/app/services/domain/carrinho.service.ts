import { ProdutoDTO } from './../../models/produto.dto';
import { Cart } from './../../models/cart';
import { StorageService } from './../storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  constructor(private storage: StorageService) {}

  createOrClearCart(): Cart {
    let cart: Cart = { items: [] };
    this.storage.setUserCart(cart);
    return cart;
  }

  getCart(): Cart {
    let cart: Cart = this.storage.getUserCart();
    if (cart == null) {
      cart = this.createOrClearCart();
    }
    return cart;
  }

  addProduto(produto: ProdutoDTO): Cart {
    let cart = this.getCart();
    let position = cart.items.findIndex((x) => x.produto.id == produto.id);
    if (position == -1) {
      cart.items.push({ quantidade: 1, produto: produto });
    } else {
      cart.items[position].quantidade++;
    }
    this.storage.setUserCart(cart);
    return cart;
  }

  removeProduto(produto: ProdutoDTO): Cart {
    let cart = this.getCart();
    let position = cart.items.findIndex((x) => x.produto.id == produto.id);
    if (position != -1) {
      cart.items.splice(position, 1);
    }
    this.storage.setUserCart(cart);
    return cart;
  }

  increaseQuantity(produto: ProdutoDTO): Cart {
    let cart = this.getCart();
    let position = cart.items.findIndex((x) => x.produto.id == produto.id);
    if (position != -1) {
      cart.items[position].quantidade++;
    }
    this.storage.setUserCart(cart);
    return cart;
  }

  decreaseQuantity(produto: ProdutoDTO): Cart {
    let cart = this.getCart();
    let position = cart.items.findIndex((x) => x.produto.id == produto.id);
    if (position != -1) {
      cart.items[position].quantidade--;
      if (cart.items[position].quantidade < 1) {
        cart.items.splice(position, 1);
      }
    }
    this.storage.setUserCart(cart);
    return cart;
  }

  total(): number {
    let cart = this.getCart();
    let sum = 0;
    for (var i = 0; i < cart.items.length; i++) {
      sum += cart.items[i].produto.preco * cart.items[i].quantidade;
    }
    return sum;
  }
}
