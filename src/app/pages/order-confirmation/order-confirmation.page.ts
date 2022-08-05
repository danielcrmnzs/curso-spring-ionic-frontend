import { PedidoService } from './../../services/domain/pedido.service';
import { AppNavegate } from './../../app-navegate';
import { ClienteService } from './../../services/domain/cliente.service';
import { EnderecoDTO } from './../../models/endereco.dto';
import { ClienteDTO } from 'src/app/models/cliente.dto';
import { CarrinhoService } from './../../services/domain/carrinho.service';
import { CartItem } from './../../models/cart-item';
import { Router } from '@angular/router';
import { PedidoDTO } from './../../models/pedido.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
})
export class OrderConfirmationPage implements OnInit {

  pedido: PedidoDTO;
  cartItems: CartItem[];
  cliente: ClienteDTO;
  endereco: EnderecoDTO;
  codPedido: string;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router,
    private clienteService: ClienteService,
    private navegate: AppNavegate,
    private pedidoService: PedidoService) {
    this.pedido = this.router.getCurrentNavigation().extras.state.pedido;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.cartItems = this.carrinhoService.getCart().items;

    this.clienteService.findById(this.pedido.cliente.id)
      .subscribe(
        (response) => {
          this.cliente = response as ClienteDTO;
          this.endereco = this.findEndereco(this.pedido.enderecoDeEntrega.id, response['enderecos']);
        },
        (error) => {
          this.navegate.goToHome();
        })
  }

  private findEndereco(id: String, list: EnderecoDTO[]): EnderecoDTO {
    const position = list.findIndex(x => x.id === id);
    return list[position];
  }

  total() {
    return this.carrinhoService.total();
  }

  checkout() {
    this.pedidoService.insert(this.pedido)
      .subscribe(
        response => {
          this.carrinhoService.createOrClearCart();
          this.codPedido = this.extractId(response.headers.get('location'));
        },
        error => {
          if (error.status == 403) {
            this.navegate.setRootToHome();
          }
        })
  }

  back() {
    this.navegate.setRootToCart();
  }

  backToCategoria() {
    this.navegate.setRootToCategorias();
  }

  private extractId(location: string): string {
    const position = location.lastIndexOf('/');
    return location.substring(position + 1, location.length);
  }

}
