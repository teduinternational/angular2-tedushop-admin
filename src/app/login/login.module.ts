import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NotificationService } from '../core/services/notification.service';
import { FormsModule } from '@angular/forms';
import { AuthenService } from '../core/services/authen.service';

export const routes: Routes = [
  { path: '', component: LoginComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [NotificationService,AuthenService],
  declarations: [LoginComponent]
})
export class LoginModule { }
