import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { AppState } from './app.service';
import { Home } from './home';
import { Conduct } from './conduct';
import { Cruise } from './cruise';
import { TicketsTerms } from './tickets-terms';
import { Faq } from './faq';
import { ConvinceYourBoss } from './home/components/convince-your-boss';
import { Talks, Talk } from './talks';
import { Workshops, Workshop } from './workshops';
import { Schedule } from './schedule';
import { Sponsors } from './sponsors';
import { NoContent } from './no-content';

import homeModule from './home';
import { SharedModule } from './shared';


// Application wide providers
const APP_PROVIDERS = [
  AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    NoContent,
    Conduct, Cruise, TicketsTerms, Talks, Talk, Workshops, Workshop, Schedule, Faq, ConvinceYourBoss, Sponsors
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    homeModule,
    SharedModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    this.appState._state = store.state;
    this.appRef.tick();
    delete store.state;
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    const state = this.appState._state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
