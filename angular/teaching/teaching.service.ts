import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Teaching } from './teaching';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeachingService{
  private teachingUrl = '/teaching/';

  constructor (private http: Http) {}

  getTeachings (page : number): Observable<Teaching[]> {
    return this.http.get(this.teachingUrl + page)
                    .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || [];
  }
}
