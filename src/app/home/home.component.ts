import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html',
  encapsulation: ViewEncapsulation.None
})
export class Home {
  constructor(router: Router) {
    console.log('Home');

    //fix(#6595) https://github.com/angular/angular/issues/6595
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          // you can use DomAdapter
          const element = document.querySelector("#" + tree.fragment);
          if (element) { 
            element.scrollIntoView(element); 
          }
        }
      }
    });
  }
}