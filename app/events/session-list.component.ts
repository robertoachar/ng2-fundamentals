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
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);

      this.sortSessions(this.sortBy);
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

  sortSessions(sort) {
    if (sort === 'name') {
      this.visibleSessions.sort(sortByNameAsc);
    }

    if (sort === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  }
  else if (s1.name === s2.name) {
    return 0;
  }
  else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
