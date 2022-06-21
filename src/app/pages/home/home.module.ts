import { BarraSuperiorComponentModule } from './../../components/barra-superior/barra-superior.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BarraSuperiorComponentModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
