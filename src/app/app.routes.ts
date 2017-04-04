import { SponsorsHome } from './home/components/sponsors';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Conduct } from './conduct';
import { Cruise } from './cruise';
import { ConvinceYourBoss } from './home/components/convince-your-boss';
import { TicketsTerms } from './tickets-terms';
import { Faq } from './faq';
import { NoContent } from './no-content';
import { Talks } from './talks';
import { Workshops } from './workshops';
import { Schedule } from './schedule';
import { Sponsors } from './sponsors';

export const ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'talks', component: Talks },
  { path: 'workshops', component: Workshops },
  { path: 'schedule', component: Schedule },
  { path: 'conduct', component: Conduct },
  { path: 'cruise', component: Cruise },
  { path: 'convince-your-boss', component: ConvinceYourBoss },
  { path: 'tickets-terms', component: TicketsTerms },
  { path: 'faq', component: Faq },
  { path: 'sponsors', component: Sponsors },
  { path: '**', component: NoContent },
];
