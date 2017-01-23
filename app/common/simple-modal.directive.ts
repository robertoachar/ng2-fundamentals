import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

import { JQUERY_TOKEN } from '../common/jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class SimpleModalDirective implements OnInit {
  private element: HTMLElement;

  constructor(
    ref: ElementRef,
    @Inject(JQUERY_TOKEN) private $: any) {
    this.element = ref.nativeElement;
  }

  ngOnInit() {
    this.element.addEventListener('click', e => {
      this.$('#simple-modal').modal({});
    })
  }
}
