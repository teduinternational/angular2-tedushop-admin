import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRouter} from './user.routes';
import { PaginationModule,ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import {DataService} from './../../core/services/data.service';
import {UtilityService} from './../../core/services/utility.service';
import {UploadService} from './../../core/services/upload.service';

import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PaginationModule,
    ModalModule,
    Daterangepicker,
    UserRouter
  ],
  declarations: [UserComponent],
  providers:[DataService,UtilityService,UploadService]
})
export class UserModule { }
