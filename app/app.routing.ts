import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventCreateComponent } from './events/event-create.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventListComponent } from './events/event-list.component';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { EventGuard } from './events/event.guard';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventGuard] },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting { }

export const routedComponents = [
  EventListComponent,
  EventDetailsComponent
];
