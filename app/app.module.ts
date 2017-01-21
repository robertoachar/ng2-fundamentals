import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';

import { EventService } from './events/shared/event.service';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
