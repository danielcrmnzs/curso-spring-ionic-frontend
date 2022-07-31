import { BarraSuperiorComponentModule } from './../../components/barra-superior/barra-superior.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderConfirmationPageRoutingModule } from './order-confirmation-routing.module';

import { OrderConfirmationPage } from './order-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderConfirmationPageRoutingModule,
    BarraSuperiorComponentModule
  ],
  declarations: [OrderConfirmationPage]
})
export class OrderConfirmationPageModule { }
