import { ActivityComponent } from './activity.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ActivityComponent }
];
export const ActivityRouter = RouterModule.forChild(routes);