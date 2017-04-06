import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: UserComponent }
];
export const UserRouter = RouterModule.forChild(routes);