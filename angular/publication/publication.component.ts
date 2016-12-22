import { Component, OnInit } from '@angular/core';

import { Publication } from './publication';
import { PublicationService } from './publication.service';
// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'publication', //html 문서에서의 구분자
  templateUrl: '/static/templates/publication.component.html',
  providers: [PublicationService]
})
export class PublicationComponent implements OnInit {//OnInit 부분 복습 필요
  publications: Publication[];
  mode = 'Observable';
  overlay: Publication;
  constructor (private publicationService: PublicationService) {}
  ngOnInit() { this.getPublications(1); }
  getPublications(page : number) {
    this.publicationService.getPublications(page)
                     .subscribe(
                       publications => this.publications = publications);
  }
}
