import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'upvote',
  templateUrl: 'upvote.component.html',
  styleUrls: ['upvote.component.css']
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit({});
  }
}
