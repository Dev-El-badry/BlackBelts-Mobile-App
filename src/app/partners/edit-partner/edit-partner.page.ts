import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { PartnerService } from '../partner.service';
import {Partner} from '../partner.model';
@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.page.html',
  styleUrls: ['./edit-partner.page.scss'],
})
export class EditPartnerPage implements OnInit {
  partnerId: number;
  partner = {
    display_name: "",
    email: ""
  };
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private partnerService: PartnerService
  ) { }

  ngOnInit() {
     this.route.paramMap.subscribe(paramMap => {
       if (!paramMap.has("partnerId")) {
         this.navCtrl.navigateBack("");
       }
       this.partnerId = Number(paramMap.get('partnerId'));
         this.partnerService.getCustomer(this.partnerId).subscribe(partner=> {
           this.partner = partner[0];
           console.log('come here', this.partner);

         });


     });

  }

  submit(form: NgForm) {
    console.log(form.value);
    this.partnerService.updateCustomer(this.partnerId, form.value).subscribe(res=> {
 
      console.log('Result: ', res);
    })
  }



}
