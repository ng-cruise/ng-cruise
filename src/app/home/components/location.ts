import { Component } from '@angular/core';

@Component({
  selector: 'location',
  template: `
    <div class="section location" id="location">When & Where</div>
    <div class="row">
      <div class="col-md-6">
        <headline title="Headline">asdasdasdasdas</headline>
      </div>
      <div class="col-md-6">
        <headline title="Headline">asdasdasdasdasd</headline>
      </div>
    </div>
    <section-footer left="assets/img/15_small.png" right="assets/img/cocktails.png" bottomClass="section-footer__red"></section-footer>
  `
})
export class Location {
  constructor() { }
}
