import { FunctionComponent } from './function.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: FunctionComponent }
];
export const FunctionRouter = RouterModule.forChild(routes);