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
  items: ProdutoDTO[];

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    let categoria_id;

    this.route.queryParams.subscribe((params) => {
      categoria_id = params.categoria_id;
    });

    this.showLoading();

    this.produtoService.findByCategoria(categoria_id).subscribe(
      (response) => {
        this.items = response['content'];

        this.loadImageUrls();
        setTimeout(() => {
          this.loadingCtrl.dismiss();
        }, 300);
        // .then((response) => {
        //   console.log('Loader closed!', response);
        // }).catch((err) => {
        //   console.log('Error occured : ', err);
        // });
      },
      (error) => {
        this.loadingCtrl.dismiss();
      }
    );
  }

  goToCategorias() {
    this.router.navigateByUrl('categorias');
  }

  loadImageUrls() {
    for (let i = 0; i < this.items.length; i++) {
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

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Aguarde...',
      //duration: 3000,
      cssClass: 'custom-loading',
    });

    loading.present();

  }
}
