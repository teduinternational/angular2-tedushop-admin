import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueComponent } from './revenue/revenue.component';
import {ReportRouter} from './report.routes';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    ReportRouter,
     ChartsModule
  ],
  declarations: [RevenueComponent]
})
export class ReportModule { }
