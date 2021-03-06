import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  template: `
    <div id="welcome" class="welcome-container centerBlock">
      <div class="welcome"></div>
      <div class="welcome-title">Angular Cruise</div>
      <div class="welcome-presented">presented by ng-conf</div>
      <div class="welcome-sub centerBlock">
        <div class="welcome-body"><p> May 29, 2017! Check our <a href="https://medium.com/@ngcruise" target="_blank">blog</a>.<br/>
        Workshops by <a [routerLink]="['/workshops']" fragment="BenLesh">Ben Lesh</a> and <a [routerLink]="['/workshops']" fragment="josepheames">Joe Eames</a>!</p><div>
      </div>
      <div class="centerBlock">
          <button class="main-btn grow" [routerLink]="['/schedule']" fragment="schedule">Schedule</button>
        </div>
    </div>
  `
})
export class Welcome {
  constructor() { }
}
