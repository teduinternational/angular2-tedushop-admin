import { ErrorComponent } from './error.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ErrorComponent }
];
export const ErrorRouter = RouterModule.forChild(routes);