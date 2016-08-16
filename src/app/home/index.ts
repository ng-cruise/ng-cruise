import { NgModule } from '@angular/core';
export * from './home';

import { Home } from './home';
import { Contact } from './components/contact';
import { Dates } from './components/dates';
import { Location } from './components/location';
import { Organisers } from './components/organisers';
import { Signup } from './components/signup';
import { Tickets } from './components/tickets';
import { Twitter } from './components/twitter';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Home, Contact, Dates, Location, Organisers, Signup, Tickets, Twitter,
  ],
  imports: [
    
  ],
  exports: [
    Home
  ]
})
export default class HomeModule {
}

