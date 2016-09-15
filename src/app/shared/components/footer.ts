import { Component } from '@angular/core';

@Component({
  selector: 'myfooter',
  template: `
    <div class="myfooter centerBlock">
      <a href="https://twitter.com/ngcruise" target="_blank">@ngcruise</a>
      | <a href="mailto:howdy@ngcruise.com">howdy@ngcruise.com</a>
    </div>
  `
})
export class Footer {
  constructor() { }
}
