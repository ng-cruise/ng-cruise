import { Component } from '@angular/core';

@Component({
  selector: 'workshops-section',
  template: `
    <div class="section workshops" id="workshops">Workshops</div>
    <div class="row">
      <div class="col-md-12">
        <div class="centerBlock padb35">
          <h4>Workshops will be run on <strong>June 3rd</strong> separately from the conference, after the cruise, in <strong>Miami</strong>.</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 centerBlock">
        <div class="workshop__title">RxJS By Example</div>
        <div class="workshop__instructor">by Ben Lesh</div>
        <div class="workshop__body centerBlock">
          Learn about RxJS 5 and Observables in-depth, and using RxJS to manage common and complex async scenarios within an application.
Thinking in functional reactive programming can be difficult, but we will give you some fundamentals to go about composing streams.
At the end of this course you'll have built an application that uses both HTTP and WebSockets to create a realtime streaming application. <a [routerLink]="['/workshops']" fragment="BenLesh">More details...</a>
        </div>
        <div class="mtb24"></div>
        <div class="centerBlock">
          <button class="main-btn grow" onclick="window.open('https://ti.to/ngcruise/ngcruise17/with/omz-4qs7fqw','_blank');return false;">$499</button>
        </div>
      </div>
      <div class="col-md-4 centerBlock">
        <div class="workshop__title">Ultimate Angular 2</div>
        <div class="workshop__instructor">by John Papa</div>
        <div class="workshop__body centerBlock">
          In this workshop you’ll learn all the fundamentals of Angular 2 such as how to get up and running quickly with Angular 2 and TypeScript, how to use reactive programming (RxJS) in your applications, how to communicate with the server, as well as how to use modern web development tools to get up and running with this amazing framework. By the time you're done with this course, you'll have the necessary knowledge and skills to begin using the framework immediately in your projects at work. <a [routerLink]="['/workshops']" fragment="John_Papa">More details...</a>
        </div>
        <div class="mtb24"></div>
        <div class="centerBlock">
          <button class="main-btn grow" onclick="window.open('https://ti.to/ngcruise/ngcruise17/with/lgt8gocom4u','_blank');return false;">$499</button>
        </div>
      </div>
      <div class="col-md-4 centerBlock gap">
        <div class="workshop__title">Angular 2 Testing<br/>Front to Back</div>
        <div class="workshop__instructor">by Joe Eames</div>
        <div class="workshop__body centerBlock">
          In this workshop we will cover the entirety of unit testing with Angular 2. From unit testing components and services to pipes and directives, we will dig into every aspect of unit testing your Angular 2 applications. <a [routerLink]="['/workshops']" fragment="josepheames">More details...</a>
        </div>
        <div class="mtb24"></div>
        <div class="centerBlock">
          <button class="main-btn grow" onclick="window.open('https://ti.to/ngcruise/ngcruise17/with/hc8me2knhas','_blank');return false;">$499</button>
        </div>
      </div>
    </div>
    <section-footer left="assets/img/15_small.png" right="assets/img/cocktails.png" bottomClass="section-footer__red"></section-footer>
  `
})
export class WorkshopsSection {
  constructor() { }
}
