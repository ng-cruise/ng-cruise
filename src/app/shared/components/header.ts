import { Component } from '@angular/core';

@Component({
  selector: 'myheader',
  template: `
    <div class="section">
      <navbar>
        <h1>ng-cruise 2017</h1>
        <a href="#" routerLink="home">Home</a>
        <a href="#" routerLink="contactus">Contact</a>
      </navbar>
    </div>
  `
})
export class Header {
  constructor() { }
}
