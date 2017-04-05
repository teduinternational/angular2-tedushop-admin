import { CourseComponent } from './course.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: CourseComponent }
];
export const CourseRouterRouter = RouterModule.forChild(routes);