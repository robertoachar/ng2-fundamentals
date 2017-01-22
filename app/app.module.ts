import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { NavBarComponent } from './nav/navbar.component';
import { EventListComponent } from './events/event-list.component';
import { EventListResolver } from './events/event-list-resolver.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventCreateComponent } from './events/event-create.component';
import { EventGuard } from './events/event.guard';

import { PageNotFoundComponent } from './errors/page-not-found.component';

import { ToastrService } from './common/toastr.service';
import { EventService } from './events/event.service';

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
