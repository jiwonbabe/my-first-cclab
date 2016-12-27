import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { People } from './people';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class PeopleService{
  private peopleUrl = '/people/';  //project data 불러오는 url

  constructor (private http: Http) {}

  getPeoples (): Observable<People[]> {
    return this.http.get(this.peopleUrl)
                    .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || [];
  }
}
