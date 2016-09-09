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
        <headline class="left" title="Headline">asdasdasdasdasd</headline>
      </div>
    </div>
  `
})
export class HeadlineSection {
  @Input() title: string = "Headline";
  @Input() image: string;
  
  constructor() { }
}
