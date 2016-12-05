import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';
// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'project',
  templateUrl: '/static/templates/project.component.html',
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  mode = 'Observable';
  constructor (private heroService: ProjectService) {}
  ngOnInit() { this.getProjects(); }
  getProjects() {
    this.heroService.getProjects()
                     .subscribe(
                       projects => this.projects = projects);
  }

}
