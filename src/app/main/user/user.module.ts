import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRouter} from './user.routes';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PaginationModule,
    UserRouter
  ],
  declarations: [UserComponent]
})
export class UserModule { }
