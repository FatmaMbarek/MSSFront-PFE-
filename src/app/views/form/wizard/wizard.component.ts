import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styles: [
  ]
})
export class WizardComponent implements OnInit {

  currentIndex: number = 1;

  public changeTab = (value: any) => {
    emit('onClick', value)
  }

  public next = () => {
    this.currentIndex += 1
  }

  public prev = () => {
    this.currentIndex -= 1
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}

function emit(arg0: string, value: any) {
  throw new Error('Function not implemented.');
}
