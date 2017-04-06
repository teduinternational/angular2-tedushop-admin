import { PostComponent } from './post.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: PostComponent }
];
export const PostRouter = RouterModule.forChild(routes);