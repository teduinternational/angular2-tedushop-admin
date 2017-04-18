import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRouter} from './user.routes';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import {UserService} from './../../core/services/user.service';
import {DataService} from './../../core/services/data.service';
import {UtilityService} from './../../core/services/utility.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PaginationModule,
    UserRouter
  ],
  declarations: [UserComponent],
  providers:[UserService,DataService,UtilityService]
})
export class UserModule { }
