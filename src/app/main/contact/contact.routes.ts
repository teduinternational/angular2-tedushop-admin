import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: ContactComponent }
];
export const ContactRouter = RouterModule.forChild(routes);