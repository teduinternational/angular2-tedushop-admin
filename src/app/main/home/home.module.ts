import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';
import { HomeComponent } from './home.component'
import { HomeRouter } from './home.routes';
import { SignalrService } from '../../core/services/signalr.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JsonpModule,
    HomeRouter
  ],
  declarations: [HomeComponent],
  providers: [SignalrService]
})
export class HomeModule { }
