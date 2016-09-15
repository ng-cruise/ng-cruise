import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `
    <div id="welcome" class="welcome-container centerBlock">
      <div class="welcome hidden-xs"></div>
      <div class="welcome-title">Angular.JS Cruise</div>
      <div class="welcome-sub">
        Sub Headline Lorem Ipsum Dolor Sit<br/>
        <a href="https://www.ng-conf.org/#/conduct" title="This code of conduct was adopted from ng-conf's code of conduct" target="_blank">Code of Conduct</a>
      </div>
      <div class="centerBlock">
        <button class="main-btn grow" onclick="document.location='/#/home#tickets';return false;">Purchase</button> 
      </div>
      <div class="centerBlock">
        <button class="main-btn grow" onclick="document.location='/#/home#sponsors';return false;">Sponsor</button>
      </div>
    </div>
  `
})
export class Welcome {
  constructor() { }
}
