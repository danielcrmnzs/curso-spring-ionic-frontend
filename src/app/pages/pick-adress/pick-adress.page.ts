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

  constructor(
    private storage: StorageService,
    private clienteService: ClienteService,
    private navegate: AppNavegate
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe(
        (response) => {
          this.items = response['enderecos'];
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
}
