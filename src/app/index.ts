import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import homeModule, { Home } from './home';
import contactUsModule, { ContactUs } from './contactus';

import { Footer } from './shared/components/footer';
import { Header } from './shared/components/header';

export const ROUTER_CONFIG = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'contactus', component: ContactUs },
];

@NgModule({
  providers: [
  ],
  declarations: [
    // Components / Directives/ Pipes
    Header, Footer
  ],
  imports: [
    RouterModule.forChild(ROUTER_CONFIG),
    homeModule,
    contactUsModule,
  ],
  exports: [
    Header, Footer
  ]
})
export default class AppModule {
  static routes = ROUTER_CONFIG
}

