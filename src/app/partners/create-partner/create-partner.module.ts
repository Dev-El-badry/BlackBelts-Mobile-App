import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePartnerPageRoutingModule } from './create-partner-routing.module';

import { CreatePartnerPage } from './create-partner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePartnerPageRoutingModule
  ],
  declarations: [CreatePartnerPage]
})
export class CreatePartnerPageModule {}
