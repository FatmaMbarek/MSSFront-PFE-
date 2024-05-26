import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ShareOffcanvasComponent } from 'src/app/components/qompac-ui/widgets/share-offcanvas/share-offcanvas.component';
// @ts-ignore
const fslightBox = () => import('fslightbox')


@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styles: [
  ]
})
export class WidgetCardComponent implements OnInit {

  constructor(private offcanvasService: NgbOffcanvas) { }
  add() {
    this.offcanvasService.open(ShareOffcanvasComponent, { position: 'bottom' });
  }



  ngOnInit(): void {
    fslightBox()
  }

}
