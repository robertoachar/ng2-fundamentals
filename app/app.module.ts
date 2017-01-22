import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  EventThumbnailComponent
} from './events/index';

import { PageNotFoundComponent } from './errors/page-not-found.component';

import { ToastrService } from './common/toastr.service';

import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventCreateComponent,
    PageNotFoundComponent
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
