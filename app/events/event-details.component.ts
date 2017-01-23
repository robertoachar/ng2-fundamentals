import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService, IEvent, ISession } from './index';

@Component({
  moduleId: module.id,
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  addMode: boolean = false;
  event: IEvent;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    session.id = nextId + 1;

    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);

    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
