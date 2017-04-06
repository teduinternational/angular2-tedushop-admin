import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import {RoleRouter} from './role.routes';

@NgModule({
  imports: [
    CommonModule,
    RoleRouter
  ],
  declarations: [RoleComponent]
})
export class RoleModule { }
