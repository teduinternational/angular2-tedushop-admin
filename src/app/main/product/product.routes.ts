import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: ProductComponent }
];
export const ProductRouter = RouterModule.forChild(routes);