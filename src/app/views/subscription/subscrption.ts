interface Pack {
    packID: number;
    label: string;
    duration: string;
    price: number;
    occurence: number;
    subscriptions: any; // Adjust type based on actual data structure
    services: { $id: string, $values: Service[] };
  }

  // export class Service {
  //   servicePID: number;
  //   nomService: string;
  //   packID: number;
  //   pack!: Pack;
  //   promotion: any;
  //   constructor() {
  //     this.servicePID = 0;
  //     this.nomService = "";
  //     this.packID = 0;
  //     this.promotion = "";
  //   }
  // }
 export  class Service {
    $id: string;
    servicePID: number;
    nomService: string;
    packID: number;
    pack: { $ref: string };
    promotion: any;
  
    constructor() {
      this.$id = '';
      this.servicePID = 0;
      this.nomService = '';
      this.packID = 0;
      this.pack = { $ref: '' };
      this.promotion = null;
    }
  }


 export class PackClass {
    packID: number;
    label: string;
    duration: string;
    price: number;
    occurence: number;
    subscriptions: any;
    services: { $id: string, $values: Service[] };
  

    constructor() {
        this.packID = 0;
        this.label = '';
        this.duration = '';
        this.price = 0;
        this.occurence = 0;
        this.subscriptions = null;
        this.services = { $id: '', $values: [] };
      }


  }