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
      <!-- <div class="col-md-4">
        <profile name="Pascal Precht" image="https://pbs.twimg.com/profile_images/740876520437211136/tpm5d6Ya_400x400.jpg">
          Pascal is a front-end engineer and a Angular Developer Expert nominated by Google. He created the angular-translate module, is an Angular 2 contributor and also part of the Angular 2 Docs Authoring team.
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Igor Minar" image="https://pbs.twimg.com/profile_images/1115035412/OnDaBeach-square_400x400.png">
          Igor is a software engineer at Google. He is a lead on the Angular project, practitioner of test driven development, open source enthusiast, hacker. In his free time, Igor enjoys spending time with his wife and two kids, doing outdoor activities (including but not limited to sports, gardening and building retaining walls).
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Misko Hevery" image="https://pbs.twimg.com/profile_images/2614358219/0ixx2n6n059uf5gdwaxl_400x400.jpeg">
          Miško is the creator of the Angular framework. He has passion for making complex things simple. He currently works at Google, but has previously worked at Adobe, Sun Microsystems, Intel, and Xerox, where he became an expert in building web applications in web related technologies such as Java, JavaScript, Flex and ActionScript.
        </profile>
      </div>
    </div> -->
    <section-footer left="assets/img/chair-drink.png" right="assets/img/13_small.png" rightClass="music" bottomClass="section-footer__beach" waves="true"></section-footer>
  `,
})
export class Speakers {
  constructor() { }
}
