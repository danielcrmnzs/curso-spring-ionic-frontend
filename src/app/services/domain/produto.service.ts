import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  findByCategoria(categoria_id: string) {
    return this.http.get(
      `${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}`
    );
  }
}
