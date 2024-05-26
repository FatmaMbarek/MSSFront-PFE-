import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import {INITIAL_EVENTS} from './events';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styles: [
  ]
})
export class CalenderComponent implements OnInit {
   
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialEvents: INITIAL_EVENTS,
  };
 
  constructor() { }

  ngOnInit(): void {
  }

}
