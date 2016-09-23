import { Component } from '@angular/core';

@Component({
  selector: 'tickets',
  template: `
    <div class="section" id="tickets">Tickets</div>
    <div class="headline__body">
      Please review our <a href="#/conduct">Code of Conduct</a> before your purchase. 
    </div>
    <div class="col-s-12">
      <h4 class="centerBlock">Tickets opens 10/15/2016.</h4>
    </div>
    <!-- <tito-widget event="ultimateconf/2013"></tito-widget> -->
    <section-footer left="assets/img/beach-umbrella.png" right="assets/img/35_small.png" bottomClass="section-footer__beach_lg hole"></section-footer>
  `
})
export class Tickets {
  constructor() { }
}
