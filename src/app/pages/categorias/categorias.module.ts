import { BarraSuperiorComponentModule } from './../../components/barra-superior/barra-superior.module';
import { CartFabComponentModule } from './../../components/cart-fab/cart-fab.module';
import { CategoriasPage } from './categorias.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasPageRoutingModule } from './categorias-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasPageRoutingModule,
    CartFabComponentModule,
    BarraSuperiorComponentModule,
  ],
  declarations: [CategoriasPage],
})
export class CategoriasPageModule {}
