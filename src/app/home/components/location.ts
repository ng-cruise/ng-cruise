import { Component } from '@angular/core';

@Component({
  selector: 'location',
  template: `
    <div class="section location" id="location">When & Where</div>
    <div class="row">
      <div class="col-md-6">
        <headline title="Sail Away"></headline>
          <div class="centerBlock">
            <h4>
              Sail the Bahamas with us!
            </h4>
            <h4>
              This is a 3 1/2 day conference with speakers, excursions, workshops, and more.
            </h4>
          </div>
        </div>
      <div class="col-md-6">
      <headline title="Dates"></headline>
        <div class="centerBlock">
          <h4>Monday May 29, 2017 - Miami, Florida</h4>
          <h4>Tuesday May 30, 2017 - Nassau, Bahamas</h4>
          <h4>Wednesday May 31, 2017 - Cococay, Bahamas</h4>
          <h4>Thursday June 1, 2017 - Key West, Florida</h4>
          <h4>Friday June 2, 2017 - Miami, Florida</h4>
        </div>
      </div>
    </div>
    <section-footer left="assets/img/15_small.png" right="assets/img/cocktails.png" bottomClass="section-footer__red"></section-footer>
  `
})
export class Location {
  constructor() { }
}
