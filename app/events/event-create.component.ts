import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'event-create.component.html'
})
export class EventCreateComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  cancel() {
    this.router.navigate(['/events']);
  }
}
