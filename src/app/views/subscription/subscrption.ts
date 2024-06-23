interface Pack {
    packID: number;
    label: string;
    duration: string;
    price: number;
    occurence: number;
    subscriptions: any; // Adjust type based on actual data structure
    services: any; // Adjust type based on actual data structure
  }
  
 export class PackClass implements Pack {
    packID: number;
    label: string;
    duration: string;
    price: number;
    occurence: number;
    subscriptions: any;
    services: any;
  

    constructor() {
        this.packID = 0;
        this.label = '';
        this.duration = '';
        this.price = 0;
        this.occurence = 0;
        this.subscriptions = null;
        this.services = null;
      }


  }