import { Component, OnInit } from '@angular/core';

import { People } from './people';
import { PeopleService } from './people.service';
// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'people',
  templateUrl: '/static/templates/people.component.html',
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {
  peoples: People[];
  mode = 'Observable';
  constructor (private peopleService: PeopleService) {}
  ngOnInit() { this.getPeoples(); }
  getPeoples() {
    this.peopleService.getPeoples()
                     .subscribe(
                       peoples => this.peoples = peoples);
  }

}
