import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-agenda-bo',
  templateUrl: './agenda-bo.component.html',
  styleUrls: ['./agenda-bo.component.scss']
})
export class AgendaBOComponent implements OnInit {
  eventForm : FormGroup;
  month;
  title;
  description;
  picture;



  constructor(
    private fb: FormBuilder,
    private sendEventsService : EventsService
  ) { }

  ngOnInit() {
    this.initEventForm();
  }

  initEventForm(){
    this.eventForm = this.fb.group({
      monthName: new FormControl('', [Validators.required]),
      eventTitle: new FormControl('', [Validators.required]),
      eventDay: new FormControl('', [Validators.required]),
      eventDescription: new FormControl('', [Validators.required]),
      eventPlace: new FormControl('', [Validators.required]),
      eventImage: new FormControl('', [Validators.required]),
    })
  }

  sendEventInfos(){
    this.sendEventsService.addEvents(this.eventForm.value);
  }

}
