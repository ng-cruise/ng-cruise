import { Component } from '@angular/core';

@Component({
  selector: 'speakers',
  template: `
    <div class="section" id="speakers">Speakers</div>
    <div class="row"> 
      <div class="col-md-4">
        <profile name="Pascal Precht" image="https://pbs.twimg.com/profile_images/740876520437211136/tpm5d6Ya_400x400.jpg">
          asddassafsdfs
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Igor Minar" image="https://pbs.twimg.com/profile_images/1115035412/OnDaBeach-square_400x400.png">
          sdadsdsasdas
        </profile>
      </div>
      <div class="col-md-4">
        <profile name="Misko Hevery" image="https://pbs.twimg.com/profile_images/2614358219/0ixx2n6n059uf5gdwaxl_400x400.jpeg">
          asdasd as
        </profile>
      </div>
    </div>
    <section-footer left="assets/img/chair-drink.png" right="assets/img/13_small.png" bottomClass="section-footer__beach" waves="true"></section-footer>
  `,
})
export class Speakers {
  constructor() { }
}
