import { Component, Input } from '@angular/core';

@Component({
  selector: 'headline-section',
  template: `
    <div class="row headline-section">
      <div class="col-md-6">
        <div class="circleBase-lg centerBlock">
          <img class="img-circle-lg" [src]="image" *ngIf="image">
        </div>
      </div>
      <div class="col-md-6">
        <headline class="left" title="Headline">Location</headline>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="centerBlock">
            <p>
              Sail the Bahamas with us!
            </p>
            <p>
              We board the ship in Miami, sail around the islands, and come back.
            </p>
            <p>
              Make it a family vacation and take the weekend to enjoy some Florida sun!
            </p>
          </div>
        </div>
      </div>
  `
})
export class HeadlineSection {
  @Input() title: string = "Headline";
  @Input() image: string;

  constructor() { }
}
