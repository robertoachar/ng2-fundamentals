import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './errors/page-not-found.component';

import { EventListComponent } from './events/event-list.component';
import { EventListResolver } from './events/event-list-resolver.service';
import { EventDetailsComponent } from './events/event-details.component';
import { EventResolver } from './events/event-resolver.service';
import { EventCreateComponent } from './events/event-create.component';
// import {
//   SessionCreateComponent
// } from './events/index';

const routes: Routes = [
  { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
  { path: 'events/new', component: EventCreateComponent },
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
  // { path: 'events/session/new', component: SessionCreateComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting { }
