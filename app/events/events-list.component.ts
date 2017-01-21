import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'events-list',
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'app/assets/images/angular-connect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  constructor() { }

  ngOnInit() { }

  handleEventClicked(data) {
    console.log(data);
  }
}
