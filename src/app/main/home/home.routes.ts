import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent }
];
export const HomeRouter = RouterModule.forChild(routes);