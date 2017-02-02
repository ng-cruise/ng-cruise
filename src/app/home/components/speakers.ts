import { Component } from '@angular/core';

@Component({
  selector: 'speakers',
  template: `
    <div class="section" id="speakers">Speakers</div>
    <div class="row">
      <div class="col-md-12">
        <div class="centerBlock">
          <button class="main-btn grow" [routerLink]="['/schedule']" fragment="schedule">Schedule</button>
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
        <profile name="Jeff Cross" twitter="jeffbcross" image="/assets/img/speakers/jeff_cross.jpg" url="/talks">
          Jeff Cross is a member of the Angular team, and co-founder of nrwl.io, providing Angular consulting to enterprise teams. Jeff was previously Tech Lead of the Angular Mobile team at Google. In his free time, Jeff hacks on various musical and electronics projects with his wife and three sons in Mountain View, California.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Victor Savkin" twitter="victorsavkin" image="/assets/img/speakers/victor_savkin.jpg" url="/talks">
          Victor Savkin is a member of the Angular team, and co-founder of nrwl.io, providing Angular consulting to enterprise teams. Victor was previously on the Angular core team at Google, and built the dependency injection, change detection, forms, and router modules. Victor lives in Toronto, Ontario, enjoys playing around with eclectic programming tech, and has a particular interest in fonts and keyboard layouts.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Ben Lesh" twitter="BenLesh" image="/assets/img/speakers/ben_lesh.jpg" url="/talks">
          Ben Lesh is the lead author and development lead of RxJS 5, which is a rewrite of RxJS with goals of better performance and JavaScript future specification compliance. He advises the Angular team on their Rx integration and is the co-author of redux-observable. Ben is a Senior Software Engineer at Netflix on the UI platform team and Co-Founder of This Dot, Inc.
        </profile>
      </div>
    </div>
    <div class="row hidden-xs">
      <div class="col-md-4">
        <profile name="Aaron Frost" twitter="js_dev" image="/assets/img/speakers/aaron_frost.jpg" url="/talks">
          Aaron has spent the last several years swimming (at times sinking) in the Open Web waters. By day he is a part of the Domo front-end team, where they are building an app that makes everyone a CEO. By night he works with O’Reilly Media and is writing the book JS.Next: ES6. He is also a Google Developer Expert and an Egghead.io author. When the world is white and frozen, you will find him atop the mountain ice fishing.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Mike Brocchi" twitter="Brocco" image="/assets/img/speakers/mike_brocchi.jpg" url="/talks">
          Mike is a Google Developer Expert and a collaborator on the Angular CLI. He enjoys talking with others to learn and teach because he believes that team collaboration is the best way to build software. Outside of software Mike also enjoys spending time with his family and friends.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Alyssa Nicoll" twitter="AlyssaNicoll" image="/assets/img/speakers/alyssa_nicoll.jpg" url="/talks">
          I am an energetic, über passionate GDE and Web Dev. I have some Front-End and Angular courses on Code School. I love to learn new things and share them with others. I Scuba Dive and have a toothless dog named 'Gummy'.
        </profile>
      </div>
    </div>
    <div class="row hidden-xs">
      <div class="col-md-4">
        <profile name="Alex Castillo" twitter="castillo__io" image="/assets/img/speakers/alex_castillo.png" url="/talks">
          Alex Castillo is a Software Engineer at Netflix and specializes in enterprise single-page applications. Alex is very passionate about the human brain and how we can use technology to understand it better. He has contributed to the open source community and focuses on Angular and NeuroTech. On his spare time, he likes experimenting with guitars and IoT.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Aysegul Yonet" twitter="AysSomething" image="/assets/img/speakers/aysegul_yonet.jpg" url="/talks">
          Aysegul is a Sr. Software Engineer working at A360. Aysegul hosts Women Who Code and Girl Develop It JavaScript Meetups in San Francisco. She also teaches workshops for D3.js, AngularJS, and MEAN stack. Aysegul is CTO of AnnieCannons, Inc, a nonprofit organization that trains human trafficking survivors in web development.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Minko Gechev" twitter="mgechev" image="/assets/img/speakers/minko_gechev.jpg" url="/talks">
          Minko is a functional time-traveler and software engineer with a passion for open source. He loves to experiment with theoretical concepts and apply them in practice. Minko teaches, speaks and writes about JavaScript and Angular. Some of the projects he works on are “Switching to Angular 2”, the official Angular 2 style guide, codelyzer, angular-seed, e2etext and many others. Currently changing education with Learn Capital.
        </profile>
      </div>
    </div>
    <div class="row hidden-xs">
      <div class="col-md-4">
        <profile name="Sebastian Witalec" twitter="sebawita" image="/assets/img/speakers/sebastian_witalec.jpg" url="/talks">
          Sebastian Witalec is a Technical Evangelist for Progress/Telerik with over 8 years of experience in software engineering and architecture.
Sebastian has passion for all types of technologies. However in the last few years his focus shifted towards cross platform Mobile development where he gained experience with Apache Cordova and NativeScript.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Justin Schwartzenberger" twitter="schwarty" image="/assets/img/speakers/justin_schwarty.jpg" url="/talks">
          His daughter: my father, is an amazing man. He is smart and funny. He loves to code and is very good at teaching it. My dad is very good at math and can calculate things very quickly in his mind. He is super cool, just like the cool guy emoji! My father is spectacular at motivating people, and he always has my back. He is very caring, and he can do anything he puts his mind to. My dad is smart, funny, cool, spectacular and kind, and he is the best!!!
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Uri Shaked" twitter="UriShaked" image="/assets/img/speakers/uri_shaked.jpg" url="/talks">
          Uri Shaked is a Google Developer Expert for Web Technologies. He created the popular angular-moment open source module and regularly speaks about Web and IoT-related technologies in conferences and meetups. Among his interests are reverse engineering, hardware hacking, building 3d-printed robots and games, playing music and Salsa dancing.
        </profile>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="row">
      <div class="col-md-12">
        <div class="centerBlock">
          <button class="main-btn grow" [routerLink]="['/talks']" fragment="talks">Talks</button>
        </div>
      </div>
    </div>
    <section-footer left="assets/img/chair-drink.png" right="assets/img/13_small.png" rightClass="music" bottomClass="section-footer__beach" waves="true"></section-footer>
  `,
})
export class Speakers {
  constructor() { }
}
