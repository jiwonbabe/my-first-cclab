import { Component, OnInit } from '@angular/core';

import { Teaching } from './teaching';
import { TeachingService } from './teaching.service';
// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'teaching', //html 문서에서의 구분자
  templateUrl: '/static/templates/teaching.component.html',
  providers: [TeachingService]
})
export class TeachingComponent implements OnInit {//OnInit 부분 복습 필요
  teachings: Teaching[];
  mode = 'Observable';
  overlay: Teaching;
  constructor (private teachingService: TeachingService) {}
  ngOnInit() { this.getTeachings(1); }
  getTeachings(page : number) {
    this.teachingService.getTeachings(page)
                     .subscribe(
                       teachings => this.teachings = teachings);
  }
}
