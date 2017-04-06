import { MainComponent } from './main.component';
import { MainModule } from './main.module';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' }
    ]

  }
];