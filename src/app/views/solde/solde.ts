// export class Solde {
//       msisdn: string;
//       bankCode: string;
//       iccid: string;
//       imei: string;
//       idSession: string;
//       code_canal: string;
//       code_app: string;
    
//       constructor() {
//         this.msisdn = '';
//         this.bankCode = '';
//         this.iccid = '';
//         this.imei = '';
//         this.idSession = '';
//         this.code_canal = '';
//         this.code_app = '';
//       }
//     }


    export class Solde {
      idSession: string;
      mobile: string;
      typeWallet: string;
      code_banque: string;
      codePlatforme: string;
      matricule: string;
      agence: string;
      requestUser: string;
    
      // Constructor to initialize the properties
      constructor() {
        this.idSession = '';
        this.mobile = '';
        this.typeWallet ='';
        this.code_banque = '';
        this.codePlatforme = '';
        this.matricule ='';
        this.agence = '';
        this.requestUser = '';
      }
    }


    export class Transaction {
      date: string;
      amount: string;
      msisdn: string;
      bankCode: string;
      authCode: string;
      canal: string;
      terminal: string;
      status: string;
      resultCode: string;
      commission: string;
      tva: string;
    
      // Constructor to initialize the properties
      constructor() {
        this.date = '';
        this.amount = '';
        this.msisdn = '';
        this.bankCode = '';
        this.authCode ='';
        this.canal = '';
        this.terminal ='';
        this.status = '';
        this.resultCode = '';
        this.commission = '';
        this.tva = '';
      }
    }