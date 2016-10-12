import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `
    <div id="welcome" class="welcome-container centerBlock">
      <div class="welcome"></div>
      <div class="welcome-title">Angular Cruise</div>
      <div class="welcome-presented">presented by ng-conf</div>
      <div class="welcome-sub">
        <p>As <a href="https://twitter.com/jeffbcross/status/776891439657525250" target="_blank">Jeff Cross' beard</a> has stated,</p>
        <p>we're officially jumping the shark</p>
        <p>May 29, 2017!</p>
      </div>
      <div class="centerBlock">
        <button class="main-btn grow" onclick="window.open('https://ti.to/ngcruise/ngcruise17','_blank');return false;">Tickets</button>
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
