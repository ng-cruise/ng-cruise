import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Conduct } from './conduct';
import { ConvinceYourBoss } from './home/components/convince-your-boss';
import { NoContent } from './no-content';


export const ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'conduct', component: Conduct },
  { path: 'convince-your-boss', component: ConvinceYourBoss },
  { path: '**', component: NoContent },
];
