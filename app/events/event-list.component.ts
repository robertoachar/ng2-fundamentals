import { Component, OnInit } from '@angular/core';

import { ToastrService } from '../common/toastr.service';
import { EventService } from './event.service';

@Component({
  moduleId: module.id,
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(
    private toastr: ToastrService,
    private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  click(name: string) {
    this.toastr.success(name);
  }
}
