import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRouter } from './product.routes';

@NgModule({
  imports: [
    CommonModule,
    ProductRouter
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
