import { Component } from '@angular/core';

@Component({
  selector: 'myfooter',
  template: `
    <div class="myfooter centerBlock">
      <a href="https://twitter.com/ngcruise" target="_blank">@ngcruise</a>
      | <a href="mailto:howdy@ngcruise.com">howdy@ngcruise.com</a><br/>
      <div class="credits centerBlock">
        Design by <a href="https://twitter.com/lindsey_io" target="_blank">Lindsey Wilson</a>
      </div>
    </div>
    
  `
})
export class Footer {
  constructor() { }
}
