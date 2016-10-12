import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Conduct } from './conduct';
import { Cruise } from './cruise';
import { NoContent } from './no-content';

export const ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'conduct', component: Conduct },
  { path: 'cruise', component: Cruise },
  { path: '**', component: NoContent },
];
