import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { NavBarComponent } from './nav/navbar.component';
import { UserModule } from './user/user.module';

import {
  EventCreateComponent,
  EventDetailsComponent,
  EventResolver,
  EventListComponent,
  EventListResolver,
  EventService,
  EventThumbnailComponent,
  SessionCreateComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events/index';

import { PageNotFoundComponent } from './errors/page-not-found.component';

import { JQUERY_TOKEN } from './common/jquery.service';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SimpleModalComponent } from './common/simple-modal.component';
import { SimpleModalDirective } from './common/simple-modal.directive';

import { DurationPipe } from './events/duration.pipe';

import { AuthService } from './user/auth.service';

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
    // {
    //   provide: 'canDeactivateEvent',
    //   useValue: checkDirtyState
    // },
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

// function checkDirtyState(component: EventCreateComponent) {
//   if (component.isDirty) {
//     return window.confirm('You have not saved.');
//   }
//   return true;
// }
