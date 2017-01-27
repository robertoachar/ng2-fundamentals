import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { EventService } from './index';

@Component({
  moduleId: module.id,
  templateUrl: 'event-create.component.html',
  styleUrls: ['event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  newEventForm: FormGroup;
  name: string = '';
  date: Date;
  time: string = '';
  price: Number = 0;
  address: string = '';
  city: string = '';
  country: string = '';
  onlineUrl: string = '';
  imageUrl: string = '';

  isDirty: boolean = true;

  constructor(
    private router: Router,
    private eventService: EventService) { }

  ngOnInit() { }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(form) {
    this.eventService.saveEvent(form)
      .subscribe(event => {
        this.isDirty = false;

        this.router.navigate(['/events']);
      });
  }
}
