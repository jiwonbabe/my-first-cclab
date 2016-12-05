import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Project } from './project';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ProjectService{
  private projectUrl = '/project/';  //project data 불러오는 url

  constructor (private http: Http) {}

  getProjects (): Observable<Project[]> {
    return this.http.get(this.projectUrl)
                    .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || [];
  }
}
