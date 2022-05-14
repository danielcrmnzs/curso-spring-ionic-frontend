import { ProdutoDTO } from './../../models/produto.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.page.html',
  styleUrls: ['./produto-detail.page.scss'],
})
export class ProdutoDetailPage implements OnInit {
  item: ProdutoDTO;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.item = {
      id: '1',
      nome: 'Mouse',
      preco: 80.59,
    };
  }
}
