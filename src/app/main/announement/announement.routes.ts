import { AnnounementComponent } from './announement.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: AnnounementComponent }
];
export const AnnounementRouter = RouterModule.forChild(routes);