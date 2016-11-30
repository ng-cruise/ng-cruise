import { Component } from '@angular/core';

@Component({
  selector: 'organisers',
  template: `
    <div class="section" id="organisers">Organisers</div>
    <div class="row">
      <div class="col-md-3">
        <profile name="Joe Eames" organiser="true" twitter="josepheames" image="/assets/img/organisers/joe-eames.jpeg">
          <a href="http://twitter.com/josepheames" target="_blank">@josepheames</a>
        </profile>
      </div>
      <div class="col-md-3">
        <profile name="Tracy Lee" organiser="true" twitter="ladyleet" image="/assets/img/organisers/tracy-lee.jpg">
          <a href="http://twitter.com/ladyleet" target="_blank">@ladyleet</a>
        </profile>
      </div>
      <div class="col-md-3">
        <profile name="Gerard Sans" organiser="true" twitter="gerardsans" image="/assets/img/organisers/gerard-sans.jpg">
          <a href="http://twitter.com/gerardsans" target="_blank">@gerardsans</a>
        </profile>
      </div>
      <div class="col-md-3">
        <profile name="Taras Mankovski" organiser="true" twitter="embersherpa" image="/assets/img/organisers/taras-mankovski.jpeg">
          <a href="http://twitter.com/embersherpa" target="_blank">@embersherpa</a>
        </profile>
      </div>
    </div>
    <section-footer left="assets/img/6_small.png" right="assets/img/29_small.png" bottomClass="section-footer__sea" waves="true"></section-footer>
  `
})
export class Organisers {
  constructor() { }
}
