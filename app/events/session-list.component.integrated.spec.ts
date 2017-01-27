import { DebugElement, NO_ERRORS_SCHEMA, SimpleChanges } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ISession } from './event.model';
import { AuthService } from '../user/auth.service';
import { VoterService } from './voter.service';
import { SessionListComponent } from './session-list.component';
import { DurationPipe } from './duration.pipe';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;
  let changes: SimpleChanges;

  beforeEach(async(() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { username: 'Joe' }
    };
    let mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        DurationPipe
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {

    it('should have the correct session title', () => {
      component.sessions = <ISession[]>[
        {
          id: 3,
          name: 'Session 1',
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob']
        }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges(changes);

      fixture.detectChanges();

      expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    });
  });
});
