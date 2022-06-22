import { CarrinhoService } from './../../services/domain/carrinho.service';
import { PedidoDTO } from './../../models/pedido.dto';
import { AppNavegate } from './../../app-navegate';
import { ClienteService } from './../../services/domain/cliente.service';
import { StorageService } from './../../services/storage.service';
import { EnderecoDTO } from './../../models/endereco.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-adress',
  templateUrl: './pick-adress.page.html',
  styleUrls: ['./pick-adress.page.scss'],
})
export class PickAdressPage implements OnInit {
  items: EnderecoDTO[];

  pedido: PedidoDTO;

  constructor(
    private storage: StorageService,
    private clienteService: ClienteService,
    private navegate: AppNavegate,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe(
        (response) => {
          this.items = response['enderecos'];

          let cart = this.carrinhoService.getCart();

          this.pedido = {
            cliente: { id: response['id'] },
            enderecoDeEntrega: null,
            pagamento: null,
            itens: cart.items.map((x) => {
              return {
                quantidade: x.quantidade,
                produto: { id: x.produto.id },
              };
            }),
          };
        },
        (error) => {
          if (error.status == 403) {
            this.navegate.goToHome();
          }
        }
      );
    } else {
      this.navegate.goToHome();
    }
  }

  selecionarEnderecoDeEntrega(endereco: EnderecoDTO) {
    this.pedido.enderecoDeEntrega = { id: endereco.id };
    console.log(this.pedido);
  }
}
