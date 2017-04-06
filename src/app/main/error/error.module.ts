import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import {ErrorRouter} from './error.routes';
@NgModule({
  imports: [
    CommonModule,
    ErrorRouter
  ],
  declarations: [ErrorComponent]
})
export class ErrorModule { }
