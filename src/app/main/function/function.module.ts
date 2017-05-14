import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionComponent } from './function.component';
import { FunctionRouter } from './function.routes'
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { DataService } from './../../core/services/data.service';
import { UtilityService } from './../../core/services/utility.service';
@NgModule({
  imports: [
    CommonModule,
    FunctionRouter,
    TreeModule,
    ModalModule,
    FormsModule
  ],
  declarations: [FunctionComponent],
  providers:[DataService,UtilityService]
})
export class FunctionModule { }
