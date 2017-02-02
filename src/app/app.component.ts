/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <myheader></myheader>
    <main>
      <router-outlet></router-outlet>
    </main>
    <myfooter></myfooter>
  `
})
export class App {
  constructor(router: Router) {
    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    var offset = (width<768)? 260 : 160;

    //fix(#6595) https://github.com/angular/angular/issues/6595
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          // you can use DomAdapter
          const element:any = document.querySelector("#" + tree.fragment);
          if (element) { 
            element.scrollIntoView(element); 
            document.body.scrollTop -= offset;
          }
        }
      }
    });
  }
 }