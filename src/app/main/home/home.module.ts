import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component'
import {HomeRouterRouter} from './home.routes';
@NgModule({
  imports: [
    CommonModule,
    HomeRouterRouter
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
