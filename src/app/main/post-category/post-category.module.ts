import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCategoryComponent } from './post-category.component';
import {PostCategoryRouter} from './post-category.routes';

@NgModule({
  imports: [
    CommonModule,
    PostCategoryRouter
  ],
  declarations: [PostCategoryComponent]
})
export class PostCategoryModule { }
