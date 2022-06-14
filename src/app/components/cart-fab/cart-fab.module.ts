import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartFabComponent } from './cart-fab.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [CartFabComponent],
  exports: [CartFabComponent]
})
export class CartFabComponentModule {}
