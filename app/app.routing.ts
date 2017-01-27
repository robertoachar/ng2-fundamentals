import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './errors/page-not-found.component';

import {
  EventCreateComponent,
  EventDetailsComponent,
  EventListComponent,
  EventListResolver,
  EventResolver,
  SessionCreateComponent
} from './events/index';

const routes: Routes = [
  { path: 'events', component: EventListComponent, resolve: { events: EventListResolver } },
  // { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateEvent'] },
  { path: 'events/new', component: EventCreateComponent },
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
  { path: 'events/session/new', component: SessionCreateComponent },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
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
