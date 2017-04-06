import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {ContactRouter} from './contact.routes'
@NgModule({
  imports: [
    CommonModule,
    ContactRouter
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
