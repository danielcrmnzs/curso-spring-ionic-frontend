import { AppNavegate } from './../../app-navegate';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss'],
})
export class BarraSuperiorComponent implements OnInit {
  @Input() title: string = '';
  @Input() mostrarBtMenu: boolean = true;
  @Input() mostrarBtVoltar: boolean = true;

  constructor(private navegate: AppNavegate) {}

  ngOnInit() {}

  navegateToSignup() {
    this.navegate.goToSignup();
  }

  navegateToHome() {
    this.navegate.goToHome();
  }


}
