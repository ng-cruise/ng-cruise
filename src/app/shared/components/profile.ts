import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'profile',
  template: `
    <div class="centerBlock profile">
      <div class="circleBase" *ngIf="organiser">
        <div class="big-bubble pos11 org-bubble"></div>
        <div class="bubble pos3"></div>
        <a href="http://twitter.com/{{twitter}}" target="_blank"><img class="img-circle zoom" [src]="image"></a>
      </div>
      <div class="circleBase" *ngIf="!organiser">
        <div class="big-bubble {{getClass('a')}}"></div>
        <div class="bubble {{positionBubbles('b')}}"></div>
        <img class="img-circle clickable zoom" [src]="image" [routerLink]="['/talks']" fragment="{{twitter}}">
      </div>
      <div class="profile__title" *ngIf="organiser">{{title}}</div>
      <div class="profile__title" *ngIf="!organiser">
        {{title}}
        <div class="profile__twitter"><a href="http://twitter.com/{{twitter}}" target="_blank">@{{twitter}}</a></div>
        <div class="tag__container" *ngIf="tagList">
          <div class="tag__title" *ngFor="let tag of tagList">{{tag}}</div>
        </div>
      </div>
      <div class="profile__description"><ng-content></ng-content></div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Profile {
  images = ['img5-bubble', 'img11-bubble', 'img39-bubble', 'img24-bubble', 'img34-bubble', 'img14-bubble'];
  layouts = [
    {a:'pos33', b: 'pos2'},
    {a:'pos22', b: 'pos3'},
    {a:'pos33', b: 'pos1'},
    {a:'pos44', b: 'pos2'},
    {a:'pos22', b: 'pos1'},
    {a:'pos22', b: 'pos4'},
    {a:'pos11', b: 'pos3'}
  ];
  i = this.random(this.layouts.length);
  tagList: string[];
  @Input() organiser: boolean = false;
  @Input('name') title: string = "Name"; 
  @Input() twitter: string;
  @Input() url: string;
  @Input() tags: string;
  @Input() image: string = "http://memesvault.com/wp-content/uploads/Happy-Face-Meme-06.png";

  constructor() { }

  ngOnInit(){
    if (this.tags) {
      this.tagList = this.tags.split(';').map(x=> x.trim());
    }   
  }

  positionBubbles(slot){
    return this.layouts[this.i][slot];
  }

  getPic(){
    return this.images[this.random(this.images.length)];
  }

  getClass(slot){
    return `${this.positionBubbles(slot)} ${this.getPic()}`;
  }

  random(length){
    return Math.floor(Math.random()*100% length);
  }
}