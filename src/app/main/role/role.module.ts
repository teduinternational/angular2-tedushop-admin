import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { RoleRouter } from './role.routes';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RoleService } from './../../core/services/role.service';
import { DataService } from './../../core/services/data.service';
import { UtilityService } from './../../core/services/utility.service';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PaginationModule,
    RoleRouter
  ],
  declarations: [RoleComponent],
  providers: [RoleService, DataService, UtilityService]
})
export class RoleModule { }
