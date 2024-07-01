import { Component, OnInit } from '@angular/core';
import { MpayService } from 'src/app/services/mpay.service';
import { Solde } from './solde';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.scss']
})
export class SoldeComponent implements OnInit {
isLoading = false;
solde : Solde = new Solde() ;
soldeWallet : number = 0 
  constructor(private mpayServices : MpayService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.solde.bankCode= "00110"
    this.solde.msisdn ="52697179"
    this.solde.code_app="08"
    this.solde.code_canal = "02"
    this.solde.idSession ="12340"
    this.solde.imei="e1e7313b-5479-404f-a974-64de159b20f3"
      this.mpayServices.getSolde(this.solde)
      .subscribe(data => {
        this.isLoading = false
        console.log(data)
       
      })

  }

}
