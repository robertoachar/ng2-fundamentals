import { Observable } from 'rxjs/Rx';

import { ISession } from './event.model';
import { VoterService } from './voter.service';

describe('VoterService', () => {
  let mockHttp: any;
  let voterService: VoterService;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);

    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {

    it('should remove the voter from the list of voters', () => {
      let session = { id: 6, voters: ['joe', 'john'] };

      mockHttp.delete.and.returnValue(Observable.of(false));

      voterService.deleteVoter(3, <ISession>session, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });
  });
});
