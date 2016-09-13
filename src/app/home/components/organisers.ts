import { Component } from '@angular/core';

@Component({
  selector: 'organisers',
  template: `
    <div class="section" id="organisers">Organisers</div>
    <div class="row"> 
      <div class="col-md-4">
        <profile name="Joe Eames" organiser="true" image="https://pbs.twimg.com/profile_images/547540451671040001/fMaJkPB2.jpeg">
          asddassafsdfs sdf dsfs
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Tracy Lee" organiser="true" image="https://pbs.twimg.com/profile_images/761700444829806592/rVYw-cuZ.jpg">
          sdadsdsasdas
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Gerard Sans" organiser="true" image="https://pbs.twimg.com/profile_images/753661038776709121/poe2MDqy.jpg">
          asdasd as
        </profile>
      </div>
    </div>
    <section-footer left="assets/img/6_small.png" right="assets/img/29_small.png" bottomClass="section-footer__sea" waves="true"></section-footer>
  `
})
export class Organisers {
  constructor() { }
}
