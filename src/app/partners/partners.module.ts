import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { PartnersPageRoutingModule } from './partners-routing.module';

import { PartnersPage } from './partners.page';
import { PartnerComponent } from './partner/partner.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    PartnersPageRoutingModule
  ],
  declarations: [PartnersPage],
  // entryComponents: [PartnerComponent]
})
export class PartnersPageModule {}
