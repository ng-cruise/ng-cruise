import { Component } from '@angular/core';

@Component({
  selector: 'tickets',
  template: `
  <div>
    <div class="section" id="tickets">Tickets</div>
    <div class="tickets__body">
      <h4>2 Keynotes, 14 Angular talks, 4 Angular Panels<br/>
      3 Interactive Angular Sessions, Unconference Sessions<br/>
      and ONE BILLION Angular Games!</h4>
    </div>
    <div class="headline__body">
      Please review the <a [routerLink]="['/cruise']" fragment="cruise">Cruise Details</a> and our <a [routerLink]="['/conduct']" fragment="conduct">Code of Conduct</a> before your purchase. 
    </div>
    <div class="headline__body">
      <a href="#/convince-your-boss">Easy ways to convince your boss</a>.
    </div>
    <div class="centerBlock">
      <button class="main-btn grow" [routerLink]="['/tickets-terms']" fragment="tickets-terms">Tickets</button>
    </div>
    <div class="centerBlock">
      <h4>Tickets are non-refundable.</h4>
    </div>
    <section-footer left="assets/img/beach-umbrella.png" right="assets/img/35_small.png" bottomClass="section-footer__beach_lg hole"></section-footer>
  </div>`
})
export class Tickets {
  constructor() { }
}
