import { CartFabComponentModule } from './../../components/cart-fab/cart-fab.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosPageRoutingModule } from './produtos-routing.module';

import { ProdutosPage } from './produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    CartFabComponentModule,
  ],
  declarations: [ProdutosPage],
})
export class ProdutosPageModule {}
