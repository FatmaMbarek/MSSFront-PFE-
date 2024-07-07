export class ReconciliationGlobalTransaction {
      mp_recv_amnt: number;
      mp_recv_comm_sign: string;
      mp_recv_acco_numb: string;
      purc_date: string;
      mp_recv_wallet_numb: string;
    
      constructor() {
        this.mp_recv_amnt = 0;
        this.mp_recv_comm_sign = '';
        this.mp_recv_acco_numb = '';
        this.purc_date = '';
        this.mp_recv_wallet_numb = '';
      }
    }


   export  class TransactionDetail {
      receiver_msisdn: string;
      issuermsisdn: string;
      transaction_authorized_amount: number;
      transaction_type_code: string;
      file_date: string;
      receiver_number: string;
      transaction_time: string;
      issuer_authorization_code: string;
      issuer: string;
    
      constructor() {
        this.receiver_msisdn = '';
        this.issuermsisdn = '';
        this.transaction_authorized_amount = 0;
        this.transaction_type_code = '';
        this.file_date = '';
        this.receiver_number = '';
        this.transaction_time = '';
        this.issuer_authorization_code = '';
        this.issuer = '';
      }
    }