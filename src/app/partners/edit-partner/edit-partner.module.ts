import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPartnerPageRoutingModule } from './edit-partner-routing.module';

import { EditPartnerPage } from './edit-partner.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EditPartnerPageRoutingModule,
    FormsModule
  ],
  declarations: [EditPartnerPage]
})
export class EditPartnerPageModule {}
