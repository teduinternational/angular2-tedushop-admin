import { MainComponent } from './main.component';
import { MainModule } from './main.module';
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'product', loadChildren: './product/product.module#ProductModule' },
      { path: 'product-category', loadChildren: './product-category/product-category.module#ProductCategoryModule' },
      { path: 'activity', loadChildren: './activity/activity.module#ActivityModule' },
      { path: 'announement', loadChildren: './announement/announement.module#AnnounementModule' },
      { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
      { path: 'order', loadChildren: './order/order.module#OrderModule' },

      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'error', loadChildren: './error/error.module#ErrorModule' },
      { path: 'function', loadChildren: './function/function.module#FunctionModule' },
      { path: 'post', loadChildren: './post/post.module#PostModule' },
      { path: 'post-category', loadChildren: './post-category/post-category.module#PostCategoryModule' },
      { path: 'role', loadChildren: './role/role.module#RoleModule' },
      { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },
      { path: 'user', loadChildren: './user/user.module#UserModule' },
    ]

  }
];