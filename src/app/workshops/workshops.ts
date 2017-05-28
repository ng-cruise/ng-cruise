import { Component } from '@angular/core';

@Component({
    selector: 'workshops',
    template: `
      <div class="page">
        <div class="section" id="workshops">
          Workshops
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="centerBlock padb35">
              <h4>Workshops will be run on <strong>June 3rd</strong> separately from the conference.</h4>
              <h4>Schedule: 9am to 5pm</h4>
              <h4>Location: EB Hotel Miami<br>(Conference room B)<br> 4299 NW 36th Street, Miami, FL 33166</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 talks">
            <workshop name="Ben Lesh" twitter="BenLesh" tags="RxJS" tittle="RxJS By Example" image="/assets/img/speakers/ben_lesh.jpg" url="/workshops">
              <h3>Brief</h3>
              <div>
                Learn about RxJS 5 and Observables in-depth, and using RxJS to manage common and complex async scenarios within an application.
Thinking in functional reactive programming can be difficult, but we will give you some fundamentals to go about composing streams.
At the end of this course you'll have built an application that uses both HTTP and WebSockets to create a realtime streaming application.
              </div>
              <h3>What You'll Learn</h3>
              <div>
                <ul>
                  <li>What an observable is and how to create one.</li>
                  <li>What an operator is and you'll create a custom operator.</li>
                  <li>How to think "reactively", the fundamentals.</li>
                  <li>How to use Rx to manage resources and application flow.</li>
                  <li>How to debug your observable chains.</li>
                  <li>How to write integration tests for Rx.</li>
                  <li>How to use complex operators like catch and retry.</li>
                  <li>When to ensure system stability.</li>
                </ul>
              </div>
              <h3>Duration</h3>
              <div>8 hours</div>
              <div>
                <button class="main-btn grow" onclick="window.open('https://ti.to/ngcruise/ngcruise17/with/omz-4qs7fqw','_blank');return false;">$499</button>
              </div>
            </workshop>

            <workshop name="Joe Eames" twitter="josepheames" tags="Angular 2 Testing" tittle="Angular 2 Testing Front to Back" image="/assets/img/organisers/joe-eames.jpeg" url="/workshops">
              <h3>Brief</h3>
              <div>
                In this workshop we will cover the entirety of unit testing with Angular 2. From unit testing components and services to pipes and directives, we will dig into every aspect of unit testing your Angular 2 applications.
              </div>
              <h3>What You'll Learn</h3>
              <div>
                <ul>
                  <li>Set up your testing environment</li>
                  <li>Write effective unit tests</li>
                  <li>The benefits of Test First vs Test After</li>
                  <li>Test Angular 2 services, pipes, directives and components</li>
                  <li>Use Angular 2 helper functions for dependency injection</li>
                  <li>Test asynchronous code</li>
                </ul>
              </div>
              <h3>Duration</h3>
              <div>8 hours</div>
              <div>
                <button class="main-btn grow" onclick="window.open('https://ti.to/ngcruise/ngcruise17/with/hc8me2knhas','_blank');return false;">$499</button>
              </div>
            </workshop>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
  `
})
export class Workshops {

}