import { OrderComponent } from './order.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: OrderComponent }
];
export const OrderRouter = RouterModule.forChild(routes);