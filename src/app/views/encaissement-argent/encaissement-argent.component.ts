import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MpayService } from 'src/app/services/mpay.service';

@Component({
  selector: 'app-encaissement-argent',
  templateUrl: './encaissement-argent.component.html',
  styleUrls: ['./encaissement-argent.component.scss']
})
export class EncaissementArgentComponent implements OnInit {
amount: any;
qrValue : string =""

isLoading = false;
token : any
generateQRCode($event: SubmitEvent) {
  this.qrValue = this.amount.toString()
  console.log( this.qrValue)
}


constructor(private mpayServices : MpayService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.token = localStorage.getItem("token")

    let bodyEncaissement = {
      "MsisdnMerchant": "94535559",
      "Affiliation":"105399000000",
      "IdSession": this.generateGUID()
    }
    
    
 

  this.mpayServices.getQrCode(bodyEncaissement, this.token)
  .subscribe(data=> {
    this.isLoading = false
console.log(data)
this.qrValue = data.qrCode
  
})

}



// methode to generate a new GUID
generateGUID(): string {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };
  return `${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`;
}
}
