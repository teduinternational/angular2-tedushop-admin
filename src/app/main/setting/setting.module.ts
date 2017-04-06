import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import {SettingRouter} from './setting.routes';
@NgModule({
  imports: [
    CommonModule,
    SettingRouter
  ],
  declarations: [SettingComponent]
})
export class SettingModule { }
