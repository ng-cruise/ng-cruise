import { Component } from '@angular/core';

@Component({
  selector: 'tickets',
  template: `
  <div>
    <div class="section" id="tickets">Tickets</div>
    <div class="headline__body">
      Please review the <a [routerLink]="['/cruise']" fragment="cruise">Cruise Details</a> and our <a [routerLink]="['/conduct']" fragment="conduct">Code of Conduct</a> before your purchase. 
    </div>
    <div class="headline__body">
      <a href="#/convince-your-boss">Easy ways to convince your boss</a>.
    </div>
    <div class="centerBlock">
      <button class="main-btn grow" onclick="window.open('https://ti.to/ngcruise/ngcruise17','_blank');return false;">Tickets</button>
    </div>
    <!-- 
    <tito-widget event="ngcruise/ngcruise17"></tito-widget>
    <tito-button event="ngcruise/ngcruise17"></tito-button> 
    -->
    <section-footer left="assets/img/beach-umbrella.png" right="assets/img/35_small.png" bottomClass="section-footer__beach_lg hole"></section-footer>
  </div>`
})
export class Tickets {
  constructor() { }
}
