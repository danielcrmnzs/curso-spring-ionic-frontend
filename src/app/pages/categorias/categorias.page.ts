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

  constructor(public categoriaService: CategoriaService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.categoriaService.findAll().subscribe(
      (response) => {
        this.items = response;
      },
      (error) => {}
    );
  }
}
