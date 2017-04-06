import { SettingComponent } from './setting.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: SettingComponent }
];
export const SettingRouter = RouterModule.forChild(routes);