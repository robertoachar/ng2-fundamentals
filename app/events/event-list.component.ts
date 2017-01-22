import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEvent } from './index';

import { ToastrService } from '../common/toastr.service';

@Component({
  moduleId: module.id,
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  click(name: string) {
    this.toastr.success(name);
  }
}
