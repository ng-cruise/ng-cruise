import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html',
  encapsulation: ViewEncapsulation.None
})
export class Home {
  constructor() {
    console.log('Home');
  }
}