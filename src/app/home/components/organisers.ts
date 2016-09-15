import { Component } from '@angular/core';

@Component({
  selector: 'organisers',
  template: `
    <div class="section" id="organisers">Organisers</div>
    <div class="row"> 
      <div class="col-md-4">
        <profile name="Joe Eames" organiser="true" image="https://pbs.twimg.com/profile_images/547540451671040001/fMaJkPB2.jpeg">
          Joe is a Viking (at heart). By day he is a mild-mannered author for Pluralsight.com. By night he is a mild-mannered organizer of ng-conf. He is a Google Developer Expert in Angular, gives lots of talks & workshops, and loves all things web.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Tracy Lee" organiser="true" image="https://pbs.twimg.com/profile_images/761700444829806592/rVYw-cuZ.jpg">
          Tracy’s passion for JavaScript began with the love of a Tomster and is a beginner Emburrito and Angular developer. She loves Ember and Angular, especially convention over configuration with the CLIs. Tracy runs the Modern Web podcast & conferences, helps organize Global Ember Meetup.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Gerard Sans" organiser="true" image="https://pbs.twimg.com/profile_images/753661038776709121/poe2MDqy.jpg">
          Gerard is a Computer Science Engineer specialised in Web and Angular Google Developer Expert. He has lived and worked for all sorts of companies in Germany, Brazil, UK and Spain. He is always up for a good challenge. He loves participating in the community, speaking at events, doing training, running AngularZone, mentoring Angular students and writing technical articles at Medium.
        </profile>
      </div>
    </div>
    <section-footer left="assets/img/6_small.png" right="assets/img/29_small.png" bottomClass="section-footer__sea" waves="true"></section-footer>
  `
})
export class Organisers {
  constructor() { }
}
