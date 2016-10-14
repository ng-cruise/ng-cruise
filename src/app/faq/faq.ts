import { Component } from '@angular/core';

@Component({
    selector: 'faq',
    template: `
  <div class="page">
    <div class="section" id="faq">
      FAQ
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 conduct">
        <div>
          <h3>I want to attend and don't mind sharing a room, what should I do?</h3>
          <p>You need to buy a ticket for the conference and pick one of these Accommodation packages: </p>
          <ul>
            <li><strong>A1</strong>: Large Oceanview Stateroom at $764</li>
            <li><strong>A2</strong>: Interior Stateroom at $714</li>
            <li><strong>A3</strong>: Small Interior Stateroom at $689</li>
          </ul>

          <h3>I want to attend and not share a room, what should I do?</h3>
          <p>You need to buy a ticket for the conference and pick one of these Accommodation packages: </p>
          <ul>
            <li><strong>B1</strong>: Large Oceanview Stateroom at $1,314</li>
            <li><strong>B2</strong>: Interior Stateroom at $1,264</li>
            <li><strong>B3</strong>: Small Interior Stateroom at $1,164</li>
          </ul>

          <h3>I want to attend and bring my spouse or significant other, what should I do?</h3>
          <p>You need to buy a ticket for the conference and pick one of these Accommodation packages: </p>
          <ul>
            <li><strong>C1</strong>: Large Oceanview Stateroom at $1,528</li>
            <li><strong>C2</strong>: Interior Stateroom at $1,428</li>
            <li><strong>C3</strong>: Small Interior Stateroom at $1,378</li>
          </ul>

        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
  `
})
export class Faq {

}
