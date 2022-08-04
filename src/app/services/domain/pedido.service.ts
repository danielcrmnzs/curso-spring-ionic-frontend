import { OrderConfirmationPage } from './../../pages/order-confirmation/order-confirmation.page';
import { API_CONFIG } from './../../config/api.config';
import { PedidoDTO } from './../../models/pedido.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(public http: HttpClient) { }

  insert(obj: PedidoDTO) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/pedidos`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

}
