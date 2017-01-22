import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { EventService } from '../events/event.service';

@Injectable()
export class EventGuard implements CanActivate {
  constructor(
    private router: Router,
    private eventService: EventService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    let id = +route.params['id'];

    let event = !!this.eventService.getEvent(id);

    if (!event) {
      this.router.navigate(['/page-not-found'])
    }

    return event;
  }
}
