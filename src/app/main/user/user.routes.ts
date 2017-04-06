import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: UserComponent }
];
export const UserRouter = RouterModule.forChild(routes);