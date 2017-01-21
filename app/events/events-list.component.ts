import { Component, OnInit } from '@angular/core';

import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  moduleId: module.id,
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
  styleUrls: ['events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(
    private toastr: ToastrService,
    private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  click(name:string) {
    this.toastr.success(name);
  }
}
