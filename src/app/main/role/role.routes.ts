import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: RoleComponent }
];
export const RoleRouter = RouterModule.forChild(routes);