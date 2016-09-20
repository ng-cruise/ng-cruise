import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `
    <div id="welcome" class="welcome-container centerBlock">
      <div class="welcome hidden-xs"></div>
      <div class="welcome-title">Angular Cruise</div>
      <div class="welcome-sub">
        <p>As <a href="https://twitter.com/jeffbcross/status/776891439657525250">Jeff Cross' beard</a> has stated,</p>
        <p>we're officially jumping the shark</p>
        <p>May 29, 2017!</p>
        <a href="https://www.ng-conf.org/#/conduct" title="This code of conduct was adopted from ng-conf's code of conduct" target="_blank">Code of Conduct</a>
      </div>
      <div class="centerBlock">
        <button class="main-btn grow" onclick="document.location='/#/home#tickets';return false;">Purchase</button>
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
