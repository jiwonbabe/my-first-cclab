import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ProjectComponent } from './project/project.component';
import { PublicationComponent } from './publication/publication.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [ ProjectComponent, PublicationComponent, TeachingComponent, PeopleComponent ],
  bootstrap:    [ ProjectComponent, PublicationComponent, TeachingComponent, PeopleComponent ]
})
export class AppModule { }
