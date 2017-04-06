import { ErrorComponent } from './error.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: ErrorComponent }
];
export const ErrorRouter = RouterModule.forChild(routes);