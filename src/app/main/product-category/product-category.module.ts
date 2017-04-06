import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import {ProductCategoryRouter} from './product-category.routes';
@NgModule({
  imports: [
    CommonModule,
    ProductCategoryRouter
  ],
  declarations: [ProductCategoryComponent]
})
export class ProductCategoryModule { }
