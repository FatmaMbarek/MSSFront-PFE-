import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-extrait',
  templateUrl: './extrait.component.html',
  styleUrls: ['./extrait.component.scss']
})
export class ExtraitComponent implements OnInit {

 
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
    // this.min=new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().substring(0,10);
    // //console.log(this.min);
    // this.max=new Date().toISOString().substring(0,10)
    // //console.log(this.max);

    // let today = new Date();
    // let oneMonthAgo = new Date();
    // oneMonthAgo.setMonth(today.getMonth() - 1);

    // this.min = oneMonthAgo.toISOString().substring(0, 10);
    // this.max = today.toISOString().substring(0, 10);

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
    //console.log(date)
    //console.log("carte ")
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
    
    //  this.VirServ.GetAccounts(this.token)
    //  .subscribe((data: any) => {
    //   this.chargedData=false
    //    //console.log(data)
    //    //this.loader=false;
    //    this.listCompte = data.accounts;
    
    //    for (var i = 0; i < this.listCompte.length; i++) {
    //      this.list0.push(this.listCompte[i].account_routings[0]);
    
    //    }
    
    //    //console.log(this.listCompte)
    //    //console.log(this.list0)
    
    //    this.routing0 = this.list0[0];
    //    //console.log(this.routing0)
    
    
    
    //  }, (err: string | string[]) => {
    //    //console.log('error API')
    //    if (err.indexOf('401') != -1) {
    //      this.router.navigate(["/"]);
    //    }
    //  }
    //  )
    
    
    
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
    //this.FormVirFile.controls['TypeCompteVir']?.reset();
      let body1 = {
        //"referentiel": this.FormVirFile.get('Tiers')?.value,
        "referentiel": this.Ref,

        "bank_id": "10"
        }
        this.BanqueServ.MinimalByRef(this.token,this.Ref)
        .subscribe((data: any) => {
          //console.log(data)
        this.listCompts=data.accounts;
        for (var i=0;i<this.listCompts.length;i++){
          this.list0.push(this.listCompts[i].account_routings[0]);
         
         }
         //console.log(this.listCompts)
         //console.log(this.list0)
          
        }, (err: string | string[]) => {
          //console.log('error API')
          if (err.indexOf('401') != -1) {
            this.router.navigate(["/"]);
          }
        }
        )
    }


    getAccountName() {
      //this.AccNum = this.FormVirFile.get('TypeCompteVir')?.value;
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
    //console.log(this.Compte)
    //console.log(this.startDate)
    //console.log(this.EndDate)
    //  this.startDate=new Date(this.startDate);
    //  this.EndDate=new Date(this.EndDate);
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
      //console.log('---date1 is greater----');
      //  }else{
      //   //console.log('---date2 is greater-----');
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
    //console.log(this.Compte)
    let startDate = this.startDate.substring(8, 10) + '/' + this.startDate.substring(5, 7) + '/' + this.startDate.substring(0, 4)
    let EndDate = this.EndDate.substring(8, 10) + '/' + this.EndDate.substring(5, 7) + '/' + this.EndDate.substring(0, 4)

    this.BanqueServ.GetExtraitCompte(this.token, this.Compte,startDate, EndDate)
      .subscribe(data => {

        //console.log(data)
        this.ExtraitBase64 = data;

        this.base = this.ExtraitBase64.Base64
        // this.loader=false;
        this.pdf = 'data:application/pdf;base64,' + this.base;

        this.src = this._base64ToArrayBuffer(this.base)
        this.loader = false;
        this.Download = true;
        // this.Compte=undefined;
        // this.startDate=undefined;
        // this.EndDate=undefined;
      }, err => {
        //console.log('error API')
        if (err.indexOf('401') != -1) {
          this.router.navigate(["/"]);
        }
      }
      )
  }
  _base64ToArrayBuffer(base64: any) {
    var binary_string = base64.replace(/\\n/g, '');
    binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
  downloadPdf(base64String: any, fileName: any) {
    fileName = "Extrait"
    const source = `data:application/pdf;base64,${this.base}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }
  onClickDownloadPdf() {
    let base64String = "your-base64-string";
    this.downloadPdf(base64String, "sample");
  }
}
