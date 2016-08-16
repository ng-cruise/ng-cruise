import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, RouterConfig } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { About } from './about';

export const ROUTER_CONFIG = [
  { path: '', component: About, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    About
  ],
  imports: [
    // Components / Directives/ Pipes
    RouterModule.forChild(ROUTER_CONFIG),
    FormsModule,
    BrowserModule
  ]
})
export default class AboutModule {
  static routes = ROUTER_CONFIG;
}

