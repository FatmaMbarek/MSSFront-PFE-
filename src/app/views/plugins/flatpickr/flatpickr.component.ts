import { Component, OnInit } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr/ng2-flatpickr';

@Component({
  selector: 'app-flatpickr',
  templateUrl: './flatpickr.component.html',
  styles: [
  ]
})
export class FlatpickrComponent implements OnInit {

  public dateTimeOptions: FlatpickrOptions = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  };
  public multidateOptions: FlatpickrOptions = {
    mode: "multiple",
    dateFormat: "Y-m-d",
  };
  public minDateOptions: FlatpickrOptions = {
    minDate: "2020-01"
  };
  public time: FlatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    time_24hr: true,
    dateFormat: "H:i:",
  };


  public maxDateOptions: FlatpickrOptions = {
    dateFormat: "d.m.Y",
      maxDate: "15.12.2017"
  };


  public specificdisableOptions: FlatpickrOptions = {
    disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date(2025, 4, 9) ],
    dateFormat: "Y-m-d",
  };
  public flatpickrtimeOptions: FlatpickrOptions = {
    minDate: "today",
      dateFormat: "Y-m-d",
  };

  public disableexceptOptions: FlatpickrOptions = {
    enable: ["2025-03-30", "2025-05-21", "2025-06-08", new Date(2025, 8, 9) ]
  };

  public humanDateOptions: FlatpickrOptions = {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
  };
  public dateRangeOptions: FlatpickrOptions = {
    mode: 'range'
  };

  public flatpickrdateOptions: FlatpickrOptions = {
    minDate: "today",
      dateFormat: "Y-m-d",
  };


  constructor() {

   }

  ngOnInit(): void {

  }

}
