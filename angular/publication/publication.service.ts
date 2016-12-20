import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Publication } from './publication';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PublicationService{
  private publicationUrl = '/publication/1/';  //django 쪽 문법아닌가?

  constructor (private http: Http) {}

  getPublications (): Observable<Publication[]> {
    return this.http.get(this.publicationUrl)
                    .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || [];
  }
}
