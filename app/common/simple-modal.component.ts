import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';

import { JQUERY_TOKEN } from './jquery.service';

@Component({
  moduleId: module.id,
  selector: 'simple-modal',
  templateUrl: 'simple-modal.component.html',
  styleUrls: ['simple-modal.component.css']
})
export class SimpleModalComponent {
  @Input() title: string = '';
  @Input() elementId: string = '';
  @ViewChild('modalcontainer') containerElement: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any) { }

  closeModal() {
    this.$(this.containerElement.nativeElement).modal('hide');
  }
}
