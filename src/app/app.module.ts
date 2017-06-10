import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { appRoutes } from './app.routes';
import { AuthGuard } from './core/guards/auth.guard';
import { SystemConstants } from './core/common/system.constants';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    PaginationModule.forRoot(),
    LoginModule,
    MainModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
