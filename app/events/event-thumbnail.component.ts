import { Component, Input } from '@angular/core';

import { IEvent } from './index';

@Component({
  moduleId: module.id,
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeStyle():any  {
    if (this.event && this.event.time === '8:00 am') {
      return { 'color': '#003300', 'font-weight': 'bold' }
    }

    if (this.event && this.event.time === '10:00 am') {
      return { 'color': 'red', 'font-weight': 'bold' }
    }

    return {};
  }
}
