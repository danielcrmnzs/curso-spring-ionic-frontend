import { BarraSuperiorComponentModule } from './../../components/barra-superior/barra-superior.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickAdressPageRoutingModule } from './pick-adress-routing.module';

import { PickAdressPage } from './pick-adress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickAdressPageRoutingModule,
    BarraSuperiorComponentModule,
  ],
  declarations: [PickAdressPage],
})
export class PickAdressPageModule {}
