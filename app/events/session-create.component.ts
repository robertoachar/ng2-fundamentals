import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { restrictedWords } from '../common/restricted-words.validator';
import { ISession } from './index';

@Component({
  moduleId: module.id,
  templateUrl: 'session-create.component.html',
  styleUrls: ['session-create.component.css']
})
export class SessionCreateComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(form) {
    let session: ISession = {
      id: undefined,
      name: form.name,
      presenter: form.presenter,
      duration: +form.duration,
      level: form.level,
      abstract: form.abstract,
      voters: []
    }
  }
}
