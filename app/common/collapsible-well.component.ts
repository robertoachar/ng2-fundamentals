import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'collapsible-well',
  templateUrl: 'collapsible-well.component.html'
})
export class CollapsibleWellComponent {
  @Input() title: string = '';
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
