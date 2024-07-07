import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';
import Swal from 'sweetalert2';
import { ReconciliationGlobalTransaction, TransactionDetail } from './reconciliation';

@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.scss']
})
export class ReconciliationComponent implements OnInit {

  globaltr : ReconciliationGlobalTransaction []= [] 
  transactionDetails : TransactionDetail[] = []
  src: any;
  base: any;
  ExtraitBase64: any;
  token: any;
  Compte: any;
  startDate: any;
  EndDate: any;
  pdf!: string;
  loader = false;
  date: any;
  Download = false;
  listCompte: any;
  list0: any = [];
  routing0: any
  AccounName:any;
  listCompts:any=[];
  Ref:any
  AccNum:any;
  TypeCompte:any;
  pk:any
  ListTiers:any=[]
  min:any;
  max:any
  constructor(private BanqueServ: SubscriptionsService, private router: Router) {
    document.getElementById("alertchampsVide")?.setAttribute("class", "alert alert-danger alert-dismissible fade hide")
    document.getElementById("alertDateSup")?.setAttribute("class", "alert alert-danger alert-dismissible fade hide")


    let today = new Date();
    var date = new Date();
    date.setMonth(date.getMonth() - 1);
    date.setDate(1);
    this.min = date.toISOString().substr(0, 10);
    this.max = today.toISOString().substring(0, 10);
  }

  ngOnInit(): void {
    let date = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = date;
  
    this.token = localStorage.getItem("token");
    // this.GetExtrait();
    document.getElementById("alertchampsVide")?.setAttribute("class", "alert alert-danger alert-dismissible fade hide")
    document.getElementById("alertDateSup")?.setAttribute("class", "alert alert-danger alert-dismissible fade hide")
    this.loader=true;
    this.BanqueServ.getTiersByIdDigital(this.token)    
    .subscribe(data1 => {
    this.loader=false;
    //console.log(data1);
    this.ListTiers=data1
    

    
    }, (err: string | string[]) => {
    //console.log('error API')
    if(err.indexOf('401') != -1)
    {
    this.router.navigate(["/"]);
    }
    });
  }
  getAccountsBytiers(){
    this.list0=[]
    this.AccounName="";
      let body1 = {
        "referentiel": this.Ref,

        "bank_id": "10"
        }
        this.BanqueServ.MinimalByRef(this.token,this.Ref)
        .subscribe((data: any) => {
        this.listCompts=data.accounts;
        for (var i=0;i<this.listCompts.length;i++){
          this.list0.push(this.listCompts[i].account_routings[0]);
         
         }
        
        }, (err: string | string[]) => {
          //console.log('error API')
          if (err.indexOf('401') != -1) {
            this.router.navigate(["/"]);
          }
        }
        )
    }


    getAccountName() {
  this.AccNum=this.TypeCompte
  //console.log(this.AccNum)
      for (var i = 0; i < this.listCompts.length; i++) {
        /// this.list0.push(this.listCompts[i].account_routings[0]);
        if (this.AccNum == this.listCompts[i].account_routings[0].scheme) {
          this.pk = this.listCompts[i].id;
        }
      }
      this.BanqueServ.getDataByAccount(this.token, this.pk)
        .subscribe((data: any) => {
          //console.log(data)
          this.AccounName = data.fullname;
  
  
  
        }, (err: string | string[]) => {
          //console.log('error API')
          if (err.indexOf('401') != -1) {
            this.router.navigate(["/"]);
          }
        }
        )
    }


  hidealert() {
    document.getElementById("alertchampsVide")?.setAttribute("class", "alert alert-danger alert-dismissible fade hide")
    document.getElementById("alertDateSup")?.setAttribute("class", "alert alert-danger alert-dismissible fade hide")

  }
  VisualiserExtrait() {
   
this.Compte=this.TypeCompte;
    if (((this.Compte == undefined) || (this.Compte == ""))) {
      document.getElementById("alertchampsVide")?.setAttribute("class", "alert alert-danger alert-dismissible fade show")

    }
    if (((this.startDate == undefined) || (this.startDate == ""))) {
      document.getElementById("alertchampsVide")?.setAttribute("class", "alert alert-danger alert-dismissible fade show")

    }
    if (((this.EndDate == undefined) || (this.EndDate == ""))) {
      document.getElementById("alertchampsVide")?.setAttribute("class", "alert alert-danger alert-dismissible fade show")

    }

    if (new Date(this.startDate) > new Date(this.EndDate)) {
    
      document.getElementById("alertDateSup")?.setAttribute("class", "alert alert-danger alert-dismissible fade show")

    }

    if ((this.Compte != undefined) && (this.startDate != undefined) && (this.EndDate != undefined) && (new Date(this.startDate) <= new Date(this.EndDate))) {
      document.getElementById("alertchampsVide")?.setAttribute("class", "alert alert-danger alert-dismissible fade hide")
      document.getElementById("alertDateSup")?.setAttribute("class", "alert alert-danger alert-dismissible fade hide")

      this.GetExtrait();
    }
  }


  GetExtrait() {
    this.loader = true;
    //console.log(this.Compte)   let startDate = this.startDate.substring(8, 10) + '/' + this.startDate.substring(5, 7) + '/' + this.startDate.substring(0, 4)
    //let EndDate = this.EndDate.substring(8, 10) + '/' + this.EndDate.substring(5, 7) + '/' + this.EndDate.substring(0, 4)

   
    
    this.BanqueServ.globaltransactions(this.token, this.TypeCompte, this.formatDate(this.startDate), this.formatDate(this.EndDate))
    .subscribe(data => {
      this.loader = false;

      let res : any = data 
      this.globaltr = res

    })

  }
  

  formatDate(date: string): string {
    const formattedDate = formatDate(date, 'dd-MM-yyyy', 'en-US');
    return formattedDate;
  }

  formatDate2(date: string): string {
    const formattedDate = formatDate(date, 'yyyy-MM-dd', 'en-US');
    return formattedDate;
  }

  showDetails(wallet:any , date:any){
    this.BanqueServ.Raprochement(this.token, wallet, this.formatDate2(date))
    .subscribe(data => {
      this.loader = false;
console.log(data)
      let res : any = data 
      this.transactionDetails = res
    })

  }
}
