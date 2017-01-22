import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
  moduleId: module.id,
  templateUrl: 'event-details.component.html',
  styleUrls: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];

    this.event = this.eventService.getEvent(id);
  }
}
