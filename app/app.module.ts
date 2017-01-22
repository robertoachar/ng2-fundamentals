import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { NavBarComponent } from './nav/navbar.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details.component';

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
    EventDetailsComponent
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
