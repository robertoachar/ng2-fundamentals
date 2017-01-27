import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

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
    public auth: AuthService,
    private voterService: VoterService) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.sessions) {
      this.filterSessions(this.filterBy);

      this.sortSessions(this.sortBy);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions;
    }
    else {
      this.visibleSessions = this.sessions.filter(s => {
        return s.level.toLowerCase() === filter;
      });
    }
  }

  sortSessions(sort: string) {
    if (sort === 'name') {
      this.visibleSessions.sort(this.sortByNameAsc);
    }

    if (sort === 'votes') {
      this.visibleSessions.sort(this.sortByVotesDesc);
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
      this.visibleSessions.sort(this.sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.username);
  }

  sortByNameAsc(s1: ISession, s2: ISession) {
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

  sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }
}
