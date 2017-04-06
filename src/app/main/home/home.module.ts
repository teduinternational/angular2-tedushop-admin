import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { HomeRouter } from './home.routes';
import { HomeService } from './home.service';
@NgModule({
  imports: [
    CommonModule,
    HomeRouter
  ],
  providers: [HomeService],
  declarations: [HomeComponent]
})
export class HomeModule { }
