import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { routes } from './main.routes';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { ActivityModule } from './activity/activity.module';
import { AnnounementModule } from './announement/announement.module';
import { ContactModule } from './contact/contact.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ErrorModule } from './error/error.module';
import { FunctionModule } from './function/function.module';
import { OrderModule } from './order/order.module';
import { PostModule } from './post/post.module';
import { PostCategoryModule } from './post-category/post-category.module';
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { RoleModule } from './role/role.module';
import { SettingModule } from './setting/setting.module';
import { UserModule } from './user/user.module';


import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { TopMenuComponent } from '../shared/top-menu/top-menu.component';
@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    ActivityModule,
    AnnounementModule,
    ContactModule,
    DashboardModule,
    ErrorModule,
    FunctionModule,
    OrderModule,

    PostModule,
    PostCategoryModule,
    ProductModule,
    ProductCategoryModule,
    RoleModule,
    SettingModule,
    UserModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainComponent, TopMenuComponent, SidebarMenuComponent]
})
export class MainModule { }
