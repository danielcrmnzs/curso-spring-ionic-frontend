import { SignupPageModule } from './../../pages/signup/signup.module';
import { API_CONFIG } from './../../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CidadeDTO } from 'src/app/models/cidade.dto';

@Injectable({
  providedIn: 'root',
})
export class CidadeService {
  constructor(public http: HttpClient) {}

  findAll(estado_id: string): Observable<CidadeDTO[]> {
    return this.http.get<CidadeDTO[]>(
      `${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`
    );
  }
}
