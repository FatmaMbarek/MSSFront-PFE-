import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [
  ]
})
export class ImageComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
 
  
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  constructor() { }

  ngOnInit(): void {
  }

}
