import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ProjectComponent } from './project/project.component';
import { PublicationComponent } from './publication/publication.component';
import { TeachingComponent } from './teaching/teaching.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [ ProjectComponent, PublicationComponent, TeachingComponent ],
  bootstrap:    [ ProjectComponent, PublicationComponent, TeachingComponent]
})
export class AppModule { }
