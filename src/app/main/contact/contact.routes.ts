import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: ContactComponent }
];
export const ContactRouter = RouterModule.forChild(routes);