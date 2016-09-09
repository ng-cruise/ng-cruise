import { Component } from '@angular/core';

@Component({
  selector: 'myheader',
  template: `
    <div>
      <navbar>
        <h1>ANGULAR.JS-CRUISE</h1>
        <a href="#" routerLink="home">Home</a>
        <a href="#" routerLink="contactus">Contact</a>
      </navbar>
    </div>
  `
})
export class Header {
  constructor() { }
}
