import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['bold', 'green'];
    }

    if (this.event && this.event.time === '10:00 am') {
      return ['bold', 'red'];
    }

    return [];
  }
}
