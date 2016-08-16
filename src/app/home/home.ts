import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None
})
export class Home {
  constructor() {
    console.log('Home');
  }
}
