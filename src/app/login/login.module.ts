import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NotificationService } from '../core/services/notification.service';

export const routes: Routes = [
  { path: '', component: LoginComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [NotificationService],
  declarations: [LoginComponent]
})
export class LoginModule { }
