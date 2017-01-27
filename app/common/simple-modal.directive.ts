import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';

import { JQUERY_TOKEN } from '../common/jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class SimpleModalDirective implements OnInit {
  private element: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(
    ref: ElementRef,
    @Inject(JQUERY_TOKEN) private $: any) {
    this.element = ref.nativeElement;
  }

  ngOnInit() {
    this.element.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
