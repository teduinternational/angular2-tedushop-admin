import { SettingComponent } from './setting.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: SettingComponent }
];
export const SettingRouter = RouterModule.forChild(routes);