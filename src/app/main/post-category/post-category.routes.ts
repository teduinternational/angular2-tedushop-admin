import { PostCategoryComponent } from './post-category.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: PostCategoryComponent }
];
export const PostCategoryRouter = RouterModule.forChild(routes);