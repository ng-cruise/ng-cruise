import { Component, Input } from '@angular/core';

@Component({
  selector: 'talk',
  template: `
    <div class="row" id="{{twitter}}">
      <div class="col-md-3">
        <profile name="{{name}}" twitter="{{twitter}}" tags="{{tags}}" image="{{image}}" url="{{url}}"></profile>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-8">
        <div class="talk__container">
          <div class="talk__tittle">{{tittle}}</div>
          <div class="talk__description">
            <ng-content></ng-content> 
          </div>
        </div>
      </div>
    </div>
  `
})
export class Talk {
  @Input() name: string;
  @Input() twitter: string;
  @Input() image: string;
  @Input() tittle: string;
  @Input() tags: string;
  @Input() url: string;
}