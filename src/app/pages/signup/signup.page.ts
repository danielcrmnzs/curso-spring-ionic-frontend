import { MenuController } from '@ionic/angular';
import { AppNavegate } from './../../app-navegate';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formGroup: FormGroup;

  constructor(
    private navegate: AppNavegate,
    public menu: MenuController,
    public formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120),
        ],
      ],
      email: ['', [Validators.required], [Validators.email]],
      tipo: ['1', [Validators.required]],
      cpfOuCnpj: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ],
      ],
      senha: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', []],
      bairro: ['', []],
      cep: ['', [Validators.required]],
      telefone1: ['', [Validators.required]],
      telefone2: ['', []],
      telefone3: ['', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]],
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  signupUser() {
    console.log('Enviou o form!');
  }

  goToHome() {
    this.navegate.goToHome();
  }
}