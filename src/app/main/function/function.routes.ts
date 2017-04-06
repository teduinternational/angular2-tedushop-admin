import { FunctionComponent } from './function.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: FunctionComponent }
];
export const FunctionRouter = RouterModule.forChild(routes);