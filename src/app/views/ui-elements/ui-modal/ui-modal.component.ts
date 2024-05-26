import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
})
export class UiModalComponent implements OnInit {
  closeResult: string | undefined;

	constructor(private modalService: NgbModal) {}

  open(content: any) {
		this.modalService.open(content);
	}

  openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });
	}

  openSm(smcontent: any) {
		this.modalService.open(smcontent);
	}
	openmd(mdcontent: any) {
		  this.modalService.open(mdcontent);
	  }

	openLg(lgcontent: any) {
		this.modalService.open(lgcontent);
	}

	openXl(xlcontent: any) {
		this.modalService.open(xlcontent);
	}


	openxxl(xxlcontent: any) {
		this.modalService.open(xxlcontent);
	}

	openFullscreen(fullscreencontent: any) {
		this.modalService.open(fullscreencontent, { fullscreen: true });
	}
	openScrollingContent(scrollingContent: any) {
		this.modalService.open(scrollingContent);
	}

	openGridContent(gridContent: any) {
		this.modalService.open(gridContent);
	}

	openSmall(smallcontent: any) {
		this.modalService.open(smallcontent, { size: 'sm' });
	}

	openLarge(largecontent: any) {
		this.modalService.open(largecontent, { size: 'lg' });
	}

	openExtralarge(extralargecontent: any) {
		this.modalService.open(extralargecontent, { size: 'xl' });
	}


	openCenter(centercontent: any) {
		this.modalService.open(centercontent, { centered: true  });
	}

	openVerticallyCentered(verticallycenteredcontent: any) {
		this.modalService.open(verticallycenteredcontent, { centered: true });
	}

  ngOnInit(): void {
  }

}
