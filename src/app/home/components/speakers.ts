import { Component } from '@angular/core';

@Component({
  selector: 'speakers',
  template: `
    <div class="section" id="speakers">Speakers</div>
    <div class="row">
      <div class="col-md-12">
        <div class="centerBlock">
          <button class="main-btn grow" onclick="window.open('https://goo.gl/forms/iwt83cXAnm9Wb7J52','_blank');return false;">CFP</button>
        </div>
        <div class="centerBlock">
          <h4>CFP closes 1/15/2017.</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="centerBlock">
        <h4>Click on speakers to see their talk details.</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <profile name="Jeff Cross" twitter="jeffbcross" image="/assets/img/speakers/jeff_cross.jpg">
          Jeff is a member of the Angular core team at Google, and leads the Angular Mobile team, focusing on making angular a great platform for building mobile applications. Jeff has an extensive background in open source software, marketing, and user experience design. When not in front of a computer, he spends his time doing whatever his kids tell him to do, which usually involves playing music or making gadgets.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Victor Savkin" twitter="victorsavkin" image="/assets/img/speakers/victor_savkin.jpg">
          Victor makes Angular. He also toys with eclectic programming technologies and obsesses over fonts and keyboard layouts. Being a language nerd he spends a lot of his time playing with TypeScript, Dart, Elm, Haskell, and Clojure.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Ben Lesh" twitter="BenLesh" image="/assets/img/speakers/ben_lesh.jpg">
          Ben Lesh is the lead author and development lead of RxJS 5, which is a rewrite of RxJS with goals of better performance and JavaScript future specification compliance. He advises the Angular team on their Rx integration and is the co-author of redux-observable. Ben is a Senior Software Engineer at Netflix on the UI platform team and Co-Founder of This Dot, Inc.
        </profile>
      </div>
    </div>
    <div class="row hidden-xs">
      <div class="col-md-4">
        <profile name="Aaron Frost" twitter="js_dev" image="/assets/img/speakers/aaron_frost.jpg">
          Aaron has spent the last several years swimming (at times sinking) in the Open Web waters. By day he is a part of the Domo front-end team, where they are building an app that makes everyone a CEO. By night he works with O’Reilly Media and is writing the book JS.Next: ES6. He is also a Google Developer Expert and an Egghead.io author. When the world is white and frozen, you will find him atop the mountain ice fishing.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Mike Brocchi" twitter="Brocco" image="/assets/img/speakers/mike_brocchi.jpg">
          Mike is a Google Developer Expert and a collaborator on the Angular CLI. He enjoys talking with others to learn and teach because he believes that team collaboration is the best way to build software. Outside of software Mike also enjoys spending time with his family and friends.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Alyssa Nicoll" twitter="AlyssaNicoll" image="/assets/img/speakers/alyssa_nicoll.jpg">
          I am an energetic, über passionate GDE and Web Dev. I have some Front-End and Angular courses on Code School. I love to learn new things and share them with others. I Scuba Dive and have a toothless dog named 'Gummy'.
        </profile>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="row">
      <div class="col-md-12">
        <div class="centerBlock">
          <button class="main-btn grow" [routerLink]="['/talks']" fragment="talks">All Talks</button>
        </div>
      </div>
    </div>
    <section-footer left="assets/img/chair-drink.png" right="assets/img/13_small.png" rightClass="music" bottomClass="section-footer__beach" waves="true"></section-footer>
  `,
})
export class Speakers {
  constructor() { }
}
