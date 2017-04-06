import { PostComponent } from './post.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: PostComponent }
];
export const PostRouter = RouterModule.forChild(routes);