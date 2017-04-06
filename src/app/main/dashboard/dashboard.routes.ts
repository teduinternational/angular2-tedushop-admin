import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: DashboardComponent }
];
export const DashboardRouter = RouterModule.forChild(routes);