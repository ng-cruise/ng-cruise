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
              <h4>Workshops will be run on <strong>June 3rd</strong> separately from the conference, after the cruise, in <strong>Miami</strong>.</h4>
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

            <workshop name="John Papa" twitter="John_Papa" tags="Angular 2" tittle="Ultimate Angular 2" image="/assets/img/speakers/john_papa.png" url="/workshops">
              <h3>Brief</h3>
              <div>
                In this workshop you’ll learn all the fundamentals of Angular 2 such as how to get up and running quickly with Angular 2 and TypeScript, how to use reactive programming (RxJS) in your applications, how to communicate with the server, as well as how to use modern web development tools to get up and running with this amazing framework. By the time you're done with this course, you'll have the necessary knowledge and skills to begin using the framework immediately in your projects at work.
              </div>
              <h3>What You'll Learn</h3>
              <div>
                <ul>
                  <li>Why use Angular 2?</li>
                  <li>ES6/TypeScript core concepts</li>
                  <li>Transpiling/compiling TypeScript to JavaScript</li>
                  <li>Getting started with the Angular CLI</li>
                  <li>Bootstrapping your application</li>
                  <li>The Role of Components</li>
                  <li>Using Decorators in Components (metadata)</li>
                  <li>Dependency injection and providers</li>
                  <li>Binding data to views</li>
                  <li>Input and output properties</li>
                  <li>Managing remote data calls using services</li>
                  <li>Http and RxJS Observables</li>
                  <li>Routing and page navigation</li>
                </ul>
              </div>
              <h3>Duration</h3>
              <div>8 hours</div>
              <div>
                <button class="main-btn grow" onclick="window.open('https://ti.to/ngcruise/ngcruise17/with/lgt8gocom4u','_blank');return false;">$499</button>
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