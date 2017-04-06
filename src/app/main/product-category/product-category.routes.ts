import { ProductCategoryComponent } from './product-category.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: ProductCategoryComponent }
];
export const ProductCategoryRouter = RouterModule.forChild(routes);