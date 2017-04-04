import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export * from './home.component';

import { Home } from './home.component';
import { Welcome } from './components/welcome';
import { Contact } from './components/contact';
import { Schedule } from './components/schedule';
import { Headline } from './components/headline';
import { HeadlineSection } from './components/headline-section';
import { Dates } from './components/dates';
import { Location } from './components/location';
import { Organisers } from './components/organisers';
import { Speakers } from './components/speakers';
import { WorkshopsSection } from './components/workshops';
import { SponsorsHome } from './components/sponsors';
import { Signup } from './components/signup';
import { Tickets } from './components/tickets';
import { Twitter } from './components/twitter';
import { SectionFooter } from './components/section-footer';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Home, Welcome, Contact, Schedule, Headline, HeadlineSection, Dates, Location, Organisers, Speakers, WorkshopsSection, SponsorsHome, Signup, Tickets, Twitter, SectionFooter
  ],
  imports: [
    CommonModule, RouterModule, SharedModule
  ],
  exports: [
    Home
  ]
})
export default class HomeModule {
}
