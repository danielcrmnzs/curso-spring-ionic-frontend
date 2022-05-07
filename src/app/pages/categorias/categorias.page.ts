import { Router } from '@angular/router';
import { CategoriaService } from './../../services/domain/categoria.service';
import { CategoriaDTO } from './../../models/categoria.dto';
import { API_CONFIG } from './../../config/api.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  buckerUrl: string = API_CONFIG.bucketBaseUrl;
  items: CategoriaDTO[];

  constructor(
    public categoriaService: CategoriaService,
    public router: Router
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.categoriaService.findAll().subscribe(
      (response) => {
        this.items = response;
      },
      (error) => {}
    );
  }

  goToProdutos(categoria_id: string) {
    // this.router.navigateByUrl(
    //   this.router.createUrlTree([
    //     'produtos',
    //     { categoria_id: categoria_id },
    //   ])
    // );
    this.router.navigateByUrl(`produtos?categoria_id=${categoria_id}`);
  }
}
