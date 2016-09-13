import { Component } from '@angular/core';

@Component({
  selector: 'tickets',
  template: `
    <div class="section" id="tickets">Tickets</div>
    <section-footer left="assets/img/beach-umbrella.png" right="assets/img/35_small.png" bottomClass="section-footer__beach_lg hole"></section-footer>
  `
})
export class Tickets {
  constructor() { }
}
