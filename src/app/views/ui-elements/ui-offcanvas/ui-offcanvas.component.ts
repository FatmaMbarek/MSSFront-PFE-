import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ui-offcanvas',
  templateUrl: './ui-offcanvas.component.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
})
export class UiOffcanvasComponent implements OnInit {
  closeResult: string | undefined;

	constructor(private offcanvasService: NgbOffcanvas) {}

  openStart(startcontent: TemplateRef<any>) {
		this.offcanvasService.open(startcontent, { position: 'start' });
	}


  openEnd(endcontent: TemplateRef<any>) {
		this.offcanvasService.open(endcontent, { position: 'end' });
	}

	openTop(topcontent: TemplateRef<any>) {
		this.offcanvasService.open(topcontent, { position: 'top' });
	}

	openBottom(bottomcontent: TemplateRef<any>) {
		this.offcanvasService.open(bottomcontent, { position: 'bottom' });
	}

  openScrolling(scrollingcontent: TemplateRef<any>) {
		this.offcanvasService.open(scrollingcontent, { backdrop: false, scroll: true });
	}

  openDefault(defaultcontent: TemplateRef<any>) {
		this.offcanvasService.open(defaultcontent, { position: 'start' });
	}

  openScrolBackdrop(scrolbackdropcontent: TemplateRef<any>) {
		this.offcanvasService.open(scrolbackdropcontent, { backdrop: true, scroll: true  });
	}

  openLink(linkcontent: TemplateRef<any>) {
		this.offcanvasService.open(linkcontent, { position: 'start' });
	}

  openButton(buttoncontent: TemplateRef<any>) {
		this.offcanvasService.open(buttoncontent, { position: 'start' });
	}


  ngOnInit(): void {
  }

}
