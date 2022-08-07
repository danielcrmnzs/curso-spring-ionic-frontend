import { IonLoaderService } from './../../services/ion-loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  constructor(private ionLoaderService: IonLoaderService) { }

  ngOnInit() {
  }

  displayAutoLoader() {
    this.ionLoaderService.autoLoader();
  }
  showLoader() {
    this.ionLoaderService.simpleLoader();
  }
  hideLoader() {
    this.ionLoaderService.dismissLoader();
  }
  customizeLoader() {
    this.ionLoaderService.customLoader();
  }

}
