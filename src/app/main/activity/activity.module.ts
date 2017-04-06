import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import {ActivityRouter} from './activity.routes'
@NgModule({
  imports: [
    CommonModule,
    ActivityRouter
  ],
  declarations: [ActivityComponent]
})
export class ActivityModule { }
