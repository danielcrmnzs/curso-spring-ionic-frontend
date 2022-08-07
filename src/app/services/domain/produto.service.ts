import { ProdutoDTO } from './../../models/produto.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) { }

  findByCategoria(categoria_id: string, page: number = 0, linesPerPage: number = 24) {
    return this.http.get(
      `${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`
    );
  }

  findById(produto_id: string) {
    return this.http.get<ProdutoDTO>(
      `${API_CONFIG.baseUrl}/produtos/${produto_id}`
    );
  }

  hasImageFromBucket(id: string): Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}.jpg`;
    return this.http.get(url, { responseType: 'blob' });
  }

  getSmallImageFromBucket(id: string): Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`;
    return this.http.get(url, { responseType: 'blob' });
  }

  hasSmallImageFromBucket(id: string): Observable<any> {
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`;
    return this.http.head(url, { responseType: 'blob' });
  }
}
