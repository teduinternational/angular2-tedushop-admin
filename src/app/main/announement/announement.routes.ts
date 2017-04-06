import { AnnounementComponent } from './announement.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: AnnounementComponent }
];
export const AnnounementRouter = RouterModule.forChild(routes);