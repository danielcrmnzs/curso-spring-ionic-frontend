import { Router } from '@angular/router';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  items: ProdutoDTO[];

  constructor(public router: Router) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.items = [
      {
        id: '1',
        nome: 'Mouse',
        preco: 80.99,
      },
      {
        id: '2',
        nome: 'Teclado',
        preco: 120.99,
      },
      {
        id: '3',
        nome: 'PC',
        preco: 1200.99,
      },
    ];
  }

  goToCategorias() {
    this.router.navigateByUrl('categorias');
  }
}
