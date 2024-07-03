import { Component, OnInit } from '@angular/core';
import { MpayService } from 'src/app/services/mpay.service';
import { Solde, Transaction } from './solde';
import { data } from 'jquery';
import { Merchant } from 'src/app/model/merchant';
@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.scss']
})
export class SoldeComponent implements OnInit {
  // a unique session id to interract with the backend api 
  guid: string = "";
  transaction: Transaction[] = []
  solde: Solde = new Solde();
  soldeWallet: number = 0
  isLoading = false;
  token: any
  merchant = new Merchant();
  constructor(private mpayServices: MpayService) { }
  ngOnInit(): void {
    this.isLoading = true
    this.token = localStorage.getItem("token")
    let bodyInfoMerchant = {
      "Phone": ["94535559"],
      "requestUser": ["Dave"]
    }
    this.mpayServices.GetWalletInformations(bodyInfoMerchant, this.token)
      .subscribe(data => {
        this.isLoading = false
        this.merchant = data;
        this.merchant.Affiliation = "105399000000"
        this.merchant.Mobile = "94535559"
        localStorage.setItem("Merchant", JSON.stringify(this.merchant))
        this.solde.idSession = this.generateGUID()
        this.solde.mobile = '216' + this.merchant.Mobile
        this.solde.typeWallet = "02"
        this.solde.code_banque = "00110"
        this.solde.codePlatforme = "02"
        this.solde.matricule = "1234"
        this.solde.agence = "100"
        this.solde.requestUser = "Dave"
        console.log(this.solde)
        this.mpayServices.getSolde(this.solde, this.token)
          .subscribe(data => {
            this.isLoading = false
            console.log(data)
            this.soldeWallet = data.solde
          })



        let bodytransaction = {
          "idSession": this.generateGUID(),
          "msisdn": '216' + this.merchant.Mobile,
          "code_banque": "00110",
          "codePlatforme": "02",
          "requestUser": "Dave"
        }

        this.mpayServices.getHistoriqueMerchant(bodytransaction, this.token)
          .subscribe(data => {
            this.isLoading = false
            let tr: any = data
            this.transaction = data.operationsMerchantPayment
            //  this.soldeWallet = data.solde
          })


      })




  }

  // methode to generate a new GUID
  generateGUID(): string {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return `${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`;
  }



  // // Method to format the amount
  // formatAmount(amount: any): string {
  //   const amountNumber = parseFloat(amount);
  //   if (isNaN(amountNumber)) {
  //     return amount; // Return original if not a valid number
  //   }
  //   return amountNumber.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  // }

  formatAmount(amount: any): string {
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber)) {
      return amount; // Return original if not a valid number
    }
    const formattedAmount = (amountNumber / 1000).toLocaleString('de-DE', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3
    });
    return formattedAmount;
  }
  // Method to format the date
  formatDate(date: string): string {
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    const hour = date.substring(8, 10);
    const minute = date.substring(10, 12);
    const second = date.substring(12, 14);
    //const millisecond = date.substring(14, 17);
    return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
  }
}

