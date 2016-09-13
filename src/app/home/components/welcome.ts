import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `
    <div id="welcome" class="welcome-container centerBlock">
      <div class="welcome hidden-xs"></div>
      <div class="welcome-title">Angular.JS Cruise</div>
      <div class="welcome-sub">
        Sub Headline Lorem Ipsum Dolor Sit<br/>
        Amet Consectetur Adipiscing
      </div>
      <div class="centerBlock">
        <button class="main-btn">Purchase</button>
        <button class="main-btn">Sponsor</button>
      </div>
    </div>
  `
})
export class Welcome {
  constructor() { }
}
