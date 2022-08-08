import { IonLoadingService } from './../../services/ion-loading.service';
import { LoadingController } from '@ionic/angular';
import { API_CONFIG } from './../../config/api.config';
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

  items: ProdutoDTO[] = [];

  page: number = 0;

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private loadingService: IonLoadingService
  ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.page = 0;
    this.items = [];
    
    this.loadData();
  }

  loadData() {
    let categoria_id;

    this.route.queryParams.subscribe((params) => {
      categoria_id = params.categoria_id;
    });

    this.loadingService.showLoading();

    this.produtoService.findByCategoria(categoria_id, this.page, 20)
      .subscribe(
        (response) => {
          let start = this.items.length;
          this.items = this.items.concat(response['content']);
          let end = this.items.length - 1;
          this.loadImageUrls(start, end);
          this.loadingService.dismissLoading();
          console.log(this.page);
          console.log(this.items);
        },
        (error) => {
          this.loadingService.dismissLoading();
        }
      );
  }

  goToCategorias() {
    this.router.navigateByUrl('categorias');
  }

  loadImageUrls(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      let item = this.items[i];
      this.produtoService.hasSmallImageFromBucket(item.id).subscribe(
        (response) => {
          item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${item.id}-small.jpg`;
        },
        (error) => { }
      );
    }
  }

  goToProdutoDetail(produto_id: string) {
    this.router.navigateByUrl(`produto-detail?produto_id=${produto_id}`);
  }

  doRefresh(event) {
    this.page = 0;
    this.items = [];
    
    this.loadData();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  doInfinite(event) {
    this.page++;
    this.loadData();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }


}
