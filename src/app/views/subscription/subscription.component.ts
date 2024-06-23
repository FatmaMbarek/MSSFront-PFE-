import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';
import {PackClass } from './subscrption'
  
  @Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

   packs : PackClass [] = [];
  constructor(private subscriptionServices : SubscriptionsService) { }

  ngOnInit(): void {
    this.subscriptionServices.getPacks()
    .subscribe(data => {
      console.log(data)
      console.log(data.$values);
      this.packs = data.$values
    })
  }

}
