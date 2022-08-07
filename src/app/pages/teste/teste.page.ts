import { IonLoadingService } from './../../services/ion-loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  constructor(private ionLoaderService: IonLoadingService) { }

  ngOnInit() {
  }

  displayAutoLoader() {
    this.ionLoaderService.autoLoading();
  }
  showLoader() {
    this.ionLoaderService.showLoading();
    this.ionLoaderService.dismissLoading();
  }

}
