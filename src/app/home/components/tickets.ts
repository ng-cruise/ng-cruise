import { Component } from '@angular/core';

@Component({
  selector: 'tickets',
  template: `
    <div class="section" id="tickets">Tickets</div>
    <div class="headline__body">
      Please review our <a href="#/conduct">Code of Conduct</a> before doing your purchase. 
    </div>
    <tito-widget event="ultimateconf/2013"></tito-widget>
    <section-footer left="assets/img/beach-umbrella.png" right="assets/img/35_small.png" bottomClass="section-footer__beach_lg hole"></section-footer>
  `
})
export class Tickets {
  constructor() { }
}
