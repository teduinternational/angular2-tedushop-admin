import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRouter} from './user.routes';
@NgModule({
  imports: [
    CommonModule,
    UserRouter
  ],
  declarations: [UserComponent]
})
export class UserModule { }
