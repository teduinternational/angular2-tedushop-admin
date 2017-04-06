import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import {OrderRouter} from './order.routes';
@NgModule({
  imports: [
    CommonModule,
    OrderRouter
  ],
  declarations: [OrderComponent]
})
export class OrderModule { }
