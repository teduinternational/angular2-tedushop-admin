import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: RoleComponent }
];
export const RoleRouter = RouterModule.forChild(routes);