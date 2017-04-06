import { OrderComponent } from './order.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: OrderComponent }
];
export const OrderRouter = RouterModule.forChild(routes);