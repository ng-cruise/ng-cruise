import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `
    <div id="welcome" class="welcome-container centerBlock">
      <div class="welcome"></div>
      <div class="welcome-title">Angular.JS Cruise</div>
      <div class="welcome-sub">
        Sub Headline Lorem Ipsum Dolor Sit<br/>
        <a href="#/conduct" title="This code of conduct was adopted from ng-conf's code of conduct">Code of Conduct</a>
      </div>
      <div class="centerBlock">
        <button class="main-btn grow" onclick="window.open('http://eepurl.com/cfYyWP','_blank');return false;">Signup</button> 
      </div>
      <div class="centerBlock">
        <button class="main-btn grow" onclick="window.open('https://goo.gl/forms/bbdH7XOcRtt6ciz23','_blank');return false;">Sponsor</button>
      </div>
    </div>
  `
})
export class Welcome {
  constructor() { }
}
