import { Component } from '@angular/core';

import { AuthService } from '../user/auth.service';
import { EventService } from '../events/event.service';
import { ISession } from '../events/event.model';

@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavBarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(
    public auth: AuthService,
    private eventService: EventService) { }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
  }
}
