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
import { Sponsors } from './components/sponsors';
import { Profile } from './components/profile';
import { Signup } from './components/signup';
import { Tickets } from './components/tickets';
import { Twitter } from './components/twitter';
import { SectionFooter } from './components/section-footer';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Home, Welcome, Contact, Schedule, Headline, HeadlineSection, Dates, Location, Organisers, Speakers, Sponsors, Profile, Signup, Tickets, Twitter, SectionFooter
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Home
  ]
})
export default class HomeModule {
}
