import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from '../common/toastr.service';

@Component({
  moduleId: module.id,
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any;

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
