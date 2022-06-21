import { BarraSuperiorComponentModule } from './../../components/barra-superior/barra-superior.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SignupPageRoutingModule,
    BarraSuperiorComponentModule,
  ],
  declarations: [SignupPage],
})
export class SignupPageModule {}
