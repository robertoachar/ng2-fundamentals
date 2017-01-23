import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { ISession } from './index';

@Component({
  moduleId: module.id,
  selector: 'session-list',
  templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges, OnInit {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[] = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions;
    }
    else {
      this.visibleSessions = this.sessions.filter(s => {
        return s.level.toLowerCase() === filter;
      })
    }
  }
}
