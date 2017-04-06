import { ActivityComponent } from './activity.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: ActivityComponent }
];
export const ActivityRouter = RouterModule.forChild(routes);