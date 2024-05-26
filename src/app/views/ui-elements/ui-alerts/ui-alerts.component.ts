import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-ui-alerts',
  templateUrl: './ui-alerts.component.html',
  styles: [
  ]
})
export class UiAlertsComponent implements OnInit {
  staticAlert3Closed = false;
  staticAlertClosed = false;
  staticAlert1Closed = false;
  staticAlert2Closed = false;
  staticAlert4Closed = false;
  staticAlert5Closed = false;
  staticAlert6Closed = false;
  staticAlert7Closed = false;
  staticAlert8Closed = false;
  staticAlert9Closed = false;
  staticAlert10Closed = false;
  staticAlert11Closed = false;
  staticAlert12Closed = false;
  staticAlert13Closed = false;
  successMessage = '';

  @ViewChild('staticAlert3', { static: false }) staticAlert3: NgbAlert | undefined;
  @ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert | undefined;
  @ViewChild('staticAlert1', { static: false }) staticAlert1: NgbAlert | undefined;
  @ViewChild('staticAlert2', { static: false }) staticAlert2: NgbAlert | undefined;
  @ViewChild('staticAlert4', { static: false }) staticAlert4: NgbAlert | undefined;
  @ViewChild('staticAlert5', { static: false }) staticAlert5: NgbAlert | undefined;
  @ViewChild('staticAlert6', { static: false }) staticAlert6: NgbAlert | undefined;
  @ViewChild('staticAlert7', { static: false }) staticAlert7: NgbAlert | undefined;
  @ViewChild('staticAlert8', { static: false }) staticAlert8: NgbAlert | undefined;
  @ViewChild('staticAlert9', { static: false }) staticAlert9: NgbAlert | undefined;
  @ViewChild('staticAlert10', { static: false }) staticAlert10: NgbAlert | undefined;
  @ViewChild('staticAlert11', { static: false }) staticAlert11: NgbAlert | undefined;
  @ViewChild('staticAlert12', { static: false }) staticAlert12: NgbAlert | undefined;
  @ViewChild('staticAlert13', { static: false }) staticAlert13: NgbAlert | undefined;
  @Input() title: string | undefined;
  @Input() urlLink: string | undefined;
  constructor() { }

  

  ngOnInit(): void {

    // const ALERTS: Alert[] = [
    //   {
    //     type: 'success',
    //     message: 'This is a success alert—check it out!',
    //   },
    //   {
    //     type: 'info',
    //     message: 'This is an info alert',
    //   },
    //   {
    //     type: 'warning',
    //     message: 'This is a warning alert',
    //   },
    //   {
    //     type: 'danger',
    //     message: 'This is a danger alert',
    //   },
    //   {
    //     type: 'primary',
    //     message: 'This is a primary alert',
    //   },
    //   {
    //     type: 'secondary',
    //     message: 'This is a secondary alert',
    //   },
    //   {
    //     type: 'light',
    //     message: 'This is a light alert',
    //   },
    //   {
    //     type: 'dark',
    //     message: 'This is a dark alert',
    //   },
    // ];
  }

  // close(alert: Alert) {
	// 	this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

