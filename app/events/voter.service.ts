import { Injectable } from '@angular/core';

import { ISession } from './event.model';

@Injectable()
export class VoterService {

  constructor() { }

  addVoter(session: ISession, username: string) {
    session.voters.push(username);
  }

  deleteVoter(session: ISession, username: string) {
    session.voters = session.voters.filter(voter => voter !== username);
  }

  userHasVoted(session: ISession, username: string) {
    return session.voters.some(voter => voter === username);
  }
}
