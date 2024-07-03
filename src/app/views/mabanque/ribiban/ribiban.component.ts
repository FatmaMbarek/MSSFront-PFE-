import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-ribiban',
  templateUrl: './ribiban.component.html',
  styleUrls: ['./ribiban.component.scss']
})
export class RibibanComponent implements OnInit {

  src:any;
  base:any;
  ExtraitBase64:any;
    token: any ;
    Compte:any;
    startDate:any;
    EndDate:any;
    pdf!: string;
  loader!:boolean;
  Download=false;
  listCompte:any;
  list0:any=[];
  routing0:any;
  AccounName:any;
  listCompts:any=[];
  Ref:any
  AccNum:any;
  TypeCompte:any;
  pk:any
  ListTiers:any=[]
   constructor(private BanqueServ:SubscriptionsService, private router: Router) { 
    document.getElementById("alertchampsVide")?.setAttribute("class","alert alert-danger alert-dismissible fade hide")
  
   }
  
   ngOnInit(): void {
     //console.log("carte ")
     this.token=localStorage.getItem("token");
     //this.GetRibIBAN();
     document.getElementById("alertchampsVide")?.setAttribute("class","alert alert-danger alert-dismissible fade hide")
//      this.VirServ.GetAccounts(this.token)
//      .subscribe((data: any) => {
//        this.loader=false;
//        //console.log(data)
//        //this.loader=false;
//      this.listCompte=data.accounts;

//      for (var i=0;i<this.listCompte.length;i++){
//       this.list0.push(this.listCompte[i].account_routings[0]);
     
//      }
//      if(this.list0.length){
//        this.loader=false;
//      }
//      //console.log(this.listCompte)
//      //console.log(this.list0)

//      this.routing0=this.list0[0];
// //console.log(this.routing0)
//        //$("#ModalVirementInitie").modal("show");
//       //  document.getElementById("ModalVirementInitie")?.setAttribute("class","modal fade  show")
    
//      }, (err: string | string[]) => {
//        //console.log('error API')
//        if (err.indexOf('401') != -1) {
//          this.router.navigate(["/"]);
//        }
//      }
//      )
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





//    getAccountName(label:any){
// //console.log(label)
//    }
   hidealert(){
    document.getElementById("alertchampsVide")?.setAttribute("class","alert alert-danger alert-dismissible fade hide")
   }
   VisualiserRibIban(){
    
  this.Compte=this.TypeCompte
  if(((this.Compte==undefined) || (this.Compte==""))){
    document.getElementById("alertchampsVide")?.setAttribute("class","alert alert-danger alert-dismissible fade show")
  
  }
     if(this.Compte.length!=20){
      document.getElementById("alertchampsVide")?.setAttribute("class","alert alert-danger alert-dismissible fade show")
  
     }
  

  
  
   if(((this.Compte != undefined) &&( this.Compte !="")) && (this.Compte.length==20) ){
    document.getElementById("alertchampsVide")?.setAttribute("class","alert alert-danger alert-dismissible fade hide")
   
    this.GetRibIBAN();
   }
   }
   GetRibIBAN(){
    this.loader=true;
    this.BanqueServ.GetRIbIBAN(this.token,this.Compte,this.startDate,this.EndDate)
    .subscribe(data => {
    
      //console.log(data)
     this.ExtraitBase64=data;
  
     this.base=this.ExtraitBase64.Base64
      // this.loader=false;
      this.pdf = 'data:application/pdf;base64,' +this.base;
  
      this.src=this._base64ToArrayBuffer(this.base)
      this.loader=false;
      this.Download=true;
    }, err => {
      //console.log('error API')
      if (err.indexOf('401') != -1) {
        this.router.navigate(["/"]);
      }
    }
    )
   }
   _base64ToArrayBuffer(base64:any) {
     var binary_string = base64.replace(/\\n/g, '');
     binary_string =  window.atob(base64);
     var len = binary_string.length;
     var bytes = new Uint8Array( len );
     for (var i = 0; i < len; i++)        {
         bytes[i] = binary_string.charCodeAt(i);
     }
     return bytes.buffer;
  }
  downloadPdf(base64String:any, fileName:any) {
   fileName="RIB&IBAN"
   const source = `data:application/pdf;base64,${this.base}`;
   const link = document.createElement("a");
   link.href = source;
   link.download = `${fileName}.pdf`
   link.click();
  }
  onClickDownloadPdf(){
   let base64String = "your-base64-string";
   this.downloadPdf(base64String,"sample");
  }
  }
  