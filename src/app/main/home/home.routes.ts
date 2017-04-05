import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent }
];
export const HomeRouterRouter = RouterModule.forChild(routes);