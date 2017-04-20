import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { RoleRouter } from './role.routes';
import { PaginationModule,ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { DataService } from './../../core/services/data.service';
import { UtilityService } from './../../core/services/utility.service';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PaginationModule.forRoot(),
    RoleRouter,
    ModalModule.forRoot()
  ],
  declarations: [RoleComponent],
  providers: [DataService, UtilityService]
})
export class RoleModule { }
