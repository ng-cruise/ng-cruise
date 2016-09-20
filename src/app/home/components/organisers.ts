import { Component } from '@angular/core';

@Component({
  selector: 'organisers',
  template: `
    <div class="section" id="organisers">Organisers</div>
    <div class="row">
      <div class="col-md-3">
        <profile name="Joe Eames" organiser="true" image="/assets/img/organisers/joe-eames.jpeg">
          <a href="http://twitter.com/josepheames">@josepheames</a>
        </profile>
      </div>
      <div class="col-md-3">
        <profile name="Tracy Lee" organiser="true" image="/assets/img/organisers/tracy-lee.jpg">
          <a href="http://twitter.com/ladyleet">@ladyleet</a>
        </profile>
      </div>
      <div class="col-md-3">
        <profile name="Gerard Sans" organiser="true" image="/assets/img/organisers/gerard-sans.jpg">
          <a href="http://twitter.com/gerardsans">@gerardsans</a>
        </profile>
      </div>
      <div class="col-md-3">
        <profile name="Taras Mankovski" organiser="true" image="/assets/img/organisers/taras-mankovski.jpeg">
          <a href="http://twitter.com/embersherpa">@embersherpa</a>
        </profile>
      </div>
    </div>
    <section-footer left="assets/img/6_small.png" right="assets/img/29_small.png" bottomClass="section-footer__sea" waves="true"></section-footer>
  `
})
export class Organisers {
  constructor() { }
}
