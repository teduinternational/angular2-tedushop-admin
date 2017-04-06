import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionComponent } from './function.component';
import {FunctionRouter} from './function.routes'
@NgModule({
  imports: [
    CommonModule,
    FunctionRouter
  ],
  declarations: [FunctionComponent]
})
export class FunctionModule { }
