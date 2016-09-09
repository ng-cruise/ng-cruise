import { Component, Input } from '@angular/core';

@Component({
  selector: 'headline',
  template: `
    <div class="headline__title">{{title}}</div>
    <div class="headline__body"><ng-content></ng-content></div>
  `
})
export class Headline {
  @Input() title: string = "Headline";

  constructor() { }
}
