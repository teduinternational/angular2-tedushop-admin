import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRouterRouter } from './course.routes'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CourseRouterRouter

  ],
  declarations: [CourseComponent]
})
export class CourseModule { }
