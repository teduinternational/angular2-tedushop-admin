import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCategoryComponent } from './post-category.component';
import { PostCategoryRouter } from './post-category.routes';
import { TreeModule } from 'angular-tree-component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { DataService } from './../../core/services/data.service';
import { UtilityService } from './../../core/services/utility.service';

@NgModule({
  imports: [
    CommonModule,
    PostCategoryRouter,
    TreeModule,
    ModalModule,
    FormsModule
  ],
  declarations: [PostCategoryComponent],
  providers: [DataService, UtilityService]
})
export class PostCategoryModule { }
