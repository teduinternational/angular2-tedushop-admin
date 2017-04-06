import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {PostRouter} from './post.routes'
@NgModule({
  imports: [
    CommonModule,
    PostRouter
  ],
  declarations: [PostComponent]
})
export class PostModule { }
