import { Router } from '@angular/router';
import { ClienteService } from './../../services/domain/cliente.service';
import { MeuValidador } from './../../validators/meu-validador';
import { CidadeDTO } from './../../models/cidade.dto';
import { EstadoDTO } from './../../models/estado.dto';
import { EstadoService } from './../../services/domain/estado.service';
import { CidadeService } from './../../services/domain/cidade.service';
import { AlertController, MenuController } from '@ionic/angular';
import { AppNavegate } from './../../app-navegate';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formGroup: FormGroup;
  public estados: EstadoDTO[];
  public cidades: CidadeDTO[];

  constructor(
    public router: Router,
    private navegate: AppNavegate,
    public menu: MenuController,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService,
    public clienteService: ClienteService,
    public alertCtrl: AlertController
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
      email: ['', [Validators.required, Validators.email]],
      tipo: ['1', [Validators.required]],
      cpfOuCnpj: ['', [Validators.required, MeuValidador.cpfOuCnpj]],
      senha: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', []],
      bairro: ['', []],
      cep: ['', [Validators.required]],
      telefone1: ['', [Validators.required]],
      telefone2: ['', []],
      telefone3: ['', []],
      estadoId: ['', [Validators.required]],
      cidadeId: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  updateCidades() {
    let estadoId = this.formGroup.value.estadoId;
    if (estadoId != null || estadoId != '') {
      this.cidadeService.findAll(estadoId).subscribe(
        (response) => {
          this.cidades = response;
          this.formGroup.controls.cidadeId.setValue(null);
        },
        (error) => {}
      );
    }
  }

  ionViewWillEnter() {
    this.menu.enable(false);

    this.estadoService.findAll().subscribe(
      (response) => {
        this.estados = response;
        this.formGroup.controls.estadoId.setValue(this.estados[0].id);
        this.updateCidades();
      },
      (error) => {}
    );
  }

  signupUser() {
    this.clienteService.insert(this.formGroup.value).subscribe(
      (response) => {
        this.showInsertOk();
      },
      (error) => {}
    );
  }

  async showInsertOk() {
    const alert = await this.alertCtrl.create({
      header: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () =>{
            this.navegate.goToHome();
          }
        },
      ],
    });
    await alert.present();
  }

  goToHome() {
    this.navegate.goToHome();
  }
}
