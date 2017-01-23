import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { NavBarComponent } from './nav/navbar.component';

import {
  EventCreateComponent,
  EventDetailsComponent,
  EventGuard,
  EventListComponent,
  EventListResolver,
  EventService,
  EventThumbnailComponent,
  SessionCreateComponent,
  SessionListComponent
} from './events/index';

import { PageNotFoundComponent } from './errors/page-not-found.component';

import { ToastrService } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

import { DurationPipe } from './events/duration.pipe';

import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventCreateComponent,
    SessionCreateComponent,
    SessionListComponent,
    PageNotFoundComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    ToastrService,
    EventGuard,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved.');
  }
  return true;
}
