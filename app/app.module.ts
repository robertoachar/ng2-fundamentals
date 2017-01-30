import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { NavBarComponent } from './nav/navbar.component';

import { EventCreateComponent } from './events/event-create.component';
import { EventListComponent } from './events/event-list.component';
import { EventListResolver } from './events/event-list-resolver.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventResolver } from './events/event-resolver.service';
import { SessionListComponent } from './events/session-list.component';
import { SessionCreateComponent } from './events/session-create.component';
import { VoterService } from './events/voter.service';
import { UpvoteComponent } from './events/upvote.component';
import { LocationValidator } from './events/location-validator.directive';

import { UserModule } from './user/user.module';

import { PageNotFoundComponent } from './errors/page-not-found.component';

import { JQUERY_TOKEN } from './common/jquery.service';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SimpleModalComponent } from './common/simple-modal.component';
import { SimpleModalDirective } from './common/simple-modal.directive';

import { DurationPipe } from './events/duration.pipe';

import { AuthService } from './user/auth.service';
import { EventService } from './events/event.service';

let toastr: Toastr = window['toastr'];
let jQuery: Object = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRouting,
    UserModule
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
    UpvoteComponent,
    PageNotFoundComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    SimpleModalDirective,
    DurationPipe,
    LocationValidator
  ],
  providers: [
    EventService,
    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQUERY_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
