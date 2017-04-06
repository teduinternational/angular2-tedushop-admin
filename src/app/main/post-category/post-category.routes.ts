import { PostCategoryComponent } from './post-category.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: PostCategoryComponent }
];
export const PostCategoryRouter = RouterModule.forChild(routes);