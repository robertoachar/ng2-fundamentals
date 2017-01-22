import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './index';

@Component({
  moduleId: module.id,
  templateUrl: 'event-create.component.html',
  styleUrls: ['event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  isDirty: boolean = true;

  constructor(
    private router: Router,
    private eventService: EventService) { }

  ngOnInit() { }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(form) {
    this.isDirty = false;

    this.eventService.saveEvent(form);

    this.router.navigate(['/events']);
  }
}
