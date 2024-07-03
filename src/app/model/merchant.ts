export class Merchant {
      FirstName: string;
      LastName: string;
      PIDType: string;
      PIDNumber: string;
      RefWallet: string;
      WalletType: string;
      Status: string;
      Affiliation : string;
      Mobile : string
    
      // Constructor to initialize the properties
      constructor() {
        this.FirstName =  '';
        this.LastName =  '';
        this.PIDType =  '';
        this.PIDNumber =  '';
        this.RefWallet = '';
        this.WalletType =  '';
        this.Status =  '';
        this.Affiliation = '',
        this.Mobile = ''
      }
    }