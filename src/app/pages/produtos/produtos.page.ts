import { ProdutoService } from './../../services/domain/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  items: ProdutoDTO[];

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    let categoria_id;

    this.route.queryParams.subscribe((params) => {
      categoria_id = params.categoria_id;
    });

    this.produtoService.findByCategoria(categoria_id).subscribe(
      (response) => {
        this.items = response['content'];
      },
      (error) => {}
    );
  }

  goToCategorias() {
    this.router.navigateByUrl('categorias');
  }
}
