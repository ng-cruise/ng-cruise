import { Component } from '@angular/core';

@Component({
  selector: 'signup',
  template: `
    <div class="section" id="signup">Signup</div>
    <div class="centerBlock clearfix">
      <button class="main-btn grow" onclick="document.location='http://eepurl.com/cfYyWP';return false;">Signup</button>
    </div>
    <section-footer left="assets/img/24_small.png" right="assets/img/20_small.png" bottomClass="section-footer__sea" waves="true"></section-footer>
  `
})
export class Signup {
  constructor() { }
}
