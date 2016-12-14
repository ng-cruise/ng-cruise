import { Component, Input } from '@angular/core';

@Component({
  selector: 'workshop',
  template: `
    <div class="row" id="{{twitter}}">
      <div class="col-md-3">
        <profile name="{{name}}" twitter="{{twitter}}" tags="{{tags}}" image="{{image}}" url="{{url}}"></profile>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-8">
        <div class="centerBlock">
          <div class="workshop__tittle">{{tittle}}</div>
          <div class="workshop__description">
            <ng-content></ng-content> 
          </div>
        </div>
      </div>
    </div>
  `
})
export class Workshop {
  @Input() name: string;
  @Input() twitter: string;
  @Input() image: string;
  @Input() tittle: string;
  @Input() tags: string;
  @Input() url: string;
}