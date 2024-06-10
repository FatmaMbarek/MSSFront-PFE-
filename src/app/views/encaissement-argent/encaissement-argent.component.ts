import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-encaissement-argent',
  templateUrl: './encaissement-argent.component.html',
  styleUrls: ['./encaissement-argent.component.scss']
})
export class EncaissementArgentComponent implements OnInit {
amount: any;
qrValue : string =""
generateQRCode($event: SubmitEvent) {
  this.qrValue = this.amount.toString()
  console.log( this.qrValue)
}


  constructor() {}

  ngOnInit(): void {}

}
