import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Teaching } from './teaching';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeachingService{
  private teachingUrl = '/teaching/:page/';  //django 쪽 문법아닌가?

  constructor (private http: Http) {}

  getTeachings (): Observable<Teaching[]> {
    return this.http.get(this.teachingUrl)
                    .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || [];
  }
}
