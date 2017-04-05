import { RouterModule, Routes } from '@angular/router';
export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'main', loadChildren: './main/main.module#MainModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
];