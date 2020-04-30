import { Component, OnInit ,OnDestroy } from '@angular/core';
import {PartnerService} from './partner.service';
import {Subscription} from 'rxjs';
import {NavController, IonItemSliding, LoadingController} from '@ionic/angular';
import { UIService } from '../shared/ui.service';


@Component({
  selector: 'app-partners',
  templateUrl: './partners.page.html',
  styleUrls: ['./partners.page.scss'],
})
export class PartnersPage implements OnInit, OnDestroy {
  items: any[];
  loadItemsSub: Subscription;
  loadSub: Subscription;
  isLoading: boolean = false;
  constructor(private partnerService: PartnerService, private navCtrl: NavController,private loadingCtrl: LoadingController, private uiService: UIService) { }

  ngOnInit() {
    this.loadingCtrl
    .create({ keyboardClose: true, message: "Logging In..." })
    .then(loadingEl => {
      loadingEl.present();

      
      
      this.loadItemsSub = this.partnerService.loadItems.subscribe(items=> {
        this.items = items;
      });

      this.loadSub = this.uiService.loadingChangedStatus.subscribe(res=> {
        this.isLoading = res;

        if(!res) {
          loadingEl.dismiss();
        }
      });

      this.partnerService.getAllCustomers();
 
    });

  }

  edit(partnerId, sliding: IonItemSliding) {
   // sliding.close();
    this.navCtrl.navigateForward('/edit-partner/'+partnerId);
  }

  ngOnDestroy() {
    if(this.loadItemsSub) this.loadItemsSub.unsubscribe();
  }

}
