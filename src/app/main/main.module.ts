import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { routes } from './main.routes';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { CourseModule } from './course/course.module';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { TopMenuComponent } from '../shared/top-menu/top-menu.component';

@NgModule({
  imports: [
    CommonModule,
    CourseModule,
    HomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainComponent, TopMenuComponent, SidebarMenuComponent]
})
export class MainModule { }
