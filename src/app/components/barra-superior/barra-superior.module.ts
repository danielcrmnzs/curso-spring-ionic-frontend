import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarraSuperiorComponent } from './barra-superior.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [BarraSuperiorComponent],
  exports: [BarraSuperiorComponent],
})
export class BarraSuperiorComponentModule {}
