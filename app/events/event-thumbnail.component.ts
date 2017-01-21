import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent {
  @Input() event: any;
  someProperty: any = 'some value';

  logFoo() {
    console.log('Foo');
  }
}
