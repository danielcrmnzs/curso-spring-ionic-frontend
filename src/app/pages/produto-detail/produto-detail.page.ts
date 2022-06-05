import { CarrinhoService } from './../../services/domain/carrinho.service';
import { API_CONFIG } from './../../config/api.config';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../../services/domain/produto.service';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.page.html',
  styleUrls: ['./produto-detail.page.scss'],
})
export class ProdutoDetailPage implements OnInit {
  item: ProdutoDTO;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.route.queryParams.subscribe((params) => {
      let produto_id = params.produto_id;

      this.produtoService.findById(produto_id).subscribe(
        (response) => {
          this.item = response;
          this.getImageUrlIfExists();
        },
        (error) => {}
      );
    });
  }

  getImageUrlIfExists() {
    this.produtoService.hasImageFromBucket(this.item.id).subscribe(
      (response) => {
        this.item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${this.item.id}.jpg`;
      },
      (error) => {}
    );
  }

  addToCart(produto: ProdutoDTO) {
    this.carrinhoService.addProduto(produto);
    this.router.navigateByUrl('cart');
  }
}
