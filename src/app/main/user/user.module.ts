import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRouter} from './user.routes';
import { PaginationModule,ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import {DataService} from './../../core/services/data.service';
import {UtilityService} from './../../core/services/utility.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PaginationModule,
    ModalModule,
    UserRouter
  ],
  declarations: [UserComponent],
  providers:[DataService,UtilityService]
})
export class UserModule { }
