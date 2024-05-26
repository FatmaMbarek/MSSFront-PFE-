import { Component, OnInit } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styles: [
    `:host {
      display: block;
      padding-bottom: 120px;
    }
    
    p {
      font-family: Lato;
    }
    
    .star {
      --br-font-size: 34px;
      --br-active-color: #ed7b67;
      --br-inactive-color: #d2d2d2;
    }
    
    .bar {
      --br-active-color: #17c9c9;
    }`
  ],

})
export class RatingComponent {
  currentRate = 8;
  squareRate = 3;
  cssRate = 2.6;
  faRate = 4;
  movieRate = 0;
  verticalRate = 5;
  fontAwesomeRate = 3.5;


}
