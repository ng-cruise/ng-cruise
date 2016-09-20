import { Component } from '@angular/core';

@Component({
  selector: 'schedule',
  template: `
  <div class="row">
    <div class="col-xs-12">
      <div class="section" id="schedule">Schedule</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="centerBlock">
        <h4>This is a 3 1/2 day conference full of talks and mixed with excursions, workshops, and surprises.</h4>
      </div>
      <div class="centerBlock">
        <h4>More details forthcoming.</h4>
      </div>
    </div>
  </div>
  `
})
export class Schedule {
  constructor() { }
}
