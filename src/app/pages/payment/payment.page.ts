import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoDTO } from './../../models/pedido.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  pedido: PedidoDTO;

  parcelas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.pedido = this.router.getCurrentNavigation().extras.state.pedido;

    this.formGroup = this.formBuilder.group({
      numeroDeParcelas: [1, Validators.required],
      '@type': ['pagamentoComCartao', Validators.required],
    });
  }

  ngOnInit() { }

  nextPage() {
    this.pedido.pagamento = this.formGroup.value;
    this.router.navigateByUrl('order-confirmation',
      {
        replaceUrl: true, // impede que, após a confirmação, o botão voltar retorne para a pagina de confirmação
        state: { pedido: this.pedido } // envia o objeto pedido
      });
  }
}
