import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'collapsible-well',
  templateUrl: 'collapsible-well.component.html'
})
export class CollapsibleWellComponent {
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
