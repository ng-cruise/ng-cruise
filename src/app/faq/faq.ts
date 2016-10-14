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
            <li><strong>A1</strong>: Large Oceanview Stateroom at $764 + 5% tito + 3% credit card</li>
            <li><strong>A2</strong>: Interior Stateroom at $714 + 5% tito + 3% credit card</li>
            <li><strong>A3</strong>: Small Interior Stateroom at $689 + 5% tito + 3% credit card</li>
          </ul>
          <p>If you have a friend also attending and you want to be matched both of you must provide each others full name during registration.</p>

          <h3>I want to attend and not share a room, what should I do?</h3>
          <p>You need to buy a ticket for the conference and pick one of these Accommodation packages: </p>
          <ul>
            <li><strong>B1</strong>: Large Oceanview Stateroom at $1,314 + 5% tito + 3% credit card</li>
            <li><strong>B2</strong>: Interior Stateroom at $1,264 + 5% tito + 3% credit card</li>
            <li><strong>B3</strong>: Small Interior Stateroom at $1,164 + 5% tito + 3% credit card</li>
          </ul>

          <h3>I want to attend and bring my spouse or significant other, what should I do?</h3>
          <p>You need to buy a ticket for the conference and pick one of these Accommodation packages: </p>
          <ul>
            <li><strong>C1</strong>: Large Oceanview Stateroom at $1,528 + 5% tito + 3% credit card</li>
            <li><strong>C2</strong>: Interior Stateroom at $1,428 + 5% tito + 3% credit card</li>
            <li><strong>C3</strong>: Small Interior Stateroom at $1,378 + 5% tito + 3% credit card</li>
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
