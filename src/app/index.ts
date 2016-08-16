import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import homeModule, { Home } from './home';

const ROUTER_CONFIG = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', loadChildren: './+about' },
];

@NgModule({
  providers: [
  ],
  declarations: [
    // Components / Directives/ Pipes
    Home,
  ],
  imports: [
    RouterModule.forChild(ROUTER_CONFIG),
    homeModule,
  ],
})
export default class AppModule {
  static routes = ROUTER_CONFIG
}

