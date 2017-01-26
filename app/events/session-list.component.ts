import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { ISession } from './index';
import { AuthService } from '../user/auth.service';
import { VoterService } from './voter.service';

@Component({
  moduleId: module.id,
  selector: 'session-list',
  templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges, OnInit {
  @Input() eventId: number;
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor(
    private auth: AuthService,
    private voterService: VoterService) { }

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

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.username);
    }
    else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.username);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.username);
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
