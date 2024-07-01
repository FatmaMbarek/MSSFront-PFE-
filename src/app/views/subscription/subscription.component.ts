import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';
import {PackClass } from './subscrption'
  
  @Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  isLoading = false
   packs : PackClass [] = [];
  

  constructor(private subscriptionServices : SubscriptionsService) { }

  ngOnInit(): void {
    this.isLoading = true
    
      this.subscriptionServices.getPacks()
      .subscribe(data => {
        this.isLoading = false
        console.log(data)
        console.log(data.$values);
        this.packs = data.$values
      })

  }

}
