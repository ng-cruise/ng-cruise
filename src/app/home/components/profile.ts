import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile',
  template: `
    <div class="centerBlock profile">
      <div class="circleBase" *ngIf="organiser">
        <div class="big-bubble pos11 org-bubble"></div>
        <div class="bubble pos3"></div>
        <img class="img-circle " [src]="image">
      </div>
      <div class="circleBase" *ngIf="!organiser">
        <div class="big-bubble pos33 img5-bubble"></div>
        <div class="bubble pos2"></div>
        <img class="img-circle " [src]="image">
      </div>
      <div class="profile__title">{{title}}</div>
      <div class="profile__description"><ng-content></ng-content></div>
    </div>
  `,
})
export class Profile {
  @Input() organiser: boolean = false;
  @Input('name') title: string = "Name"; 
  @Input() image: string = "http://memesvault.com/wp-content/uploads/Happy-Face-Meme-06.png";

  

  constructor() { }
}
