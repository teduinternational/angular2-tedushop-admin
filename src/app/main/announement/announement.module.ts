import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnounementComponent } from './announement.component';
import {AnnounementRouter} from './announement.routes';
@NgModule({
  imports: [
    CommonModule,
    AnnounementRouter
  ],
  declarations: [AnnounementComponent]
})
export class AnnounementModule { }
