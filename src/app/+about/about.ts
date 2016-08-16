import { Component } from '@angular/core';

@Component({
  template: `
    <h2>About</h2>

    <form #form="ngForm" (ngSubmit)="onSubmit(form.value, form)" novalidate>
      <div>
        <label>
          <input
            #inputEmail="ngModel"
            name="inputEmail"
            [(ngModel)]="email"
            ac-is-email
          >
        </label>
      </div>

      <div *ngIf="form.submitted && inputEmail?.errors?.isEmail" style="background-color: red">
        Please use a valid email address
      </div>

      <button>Submit</button>

    </form>
  `
})
export class About {
  localState = {
    email: ''
  };
  constructor() {
  }

  onSubmit(value, form) {
    if (form.valid) {
      console.log('form value', value);
    } else {
      console.log('form invalid');
    }
  }
}
