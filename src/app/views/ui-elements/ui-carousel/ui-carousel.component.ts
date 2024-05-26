import { Component, OnInit,Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ui-carousel',
  templateUrl: './ui-carousel.component.html',
  styles: [
  ],
	// providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers   
})
export class UiCarouselComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() urlLink: string | undefined;

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		// config.showNavigationArrows = false;
		// config.showNavigationIndicators = false;
	}
  

  ngOnInit(): void {
  }

}
