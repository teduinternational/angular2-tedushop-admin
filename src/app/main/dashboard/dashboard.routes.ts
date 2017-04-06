import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: DashboardComponent }
];
export const DashboardRouter = RouterModule.forChild(routes);