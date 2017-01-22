import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponent } from './events/event-details.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
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