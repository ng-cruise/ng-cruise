import { Component } from '@angular/core';


@Component({})
export class Home {
  constructor() {
    console.log('Home');
  }
}

@Component({
  template: `
    <div>
      YOLO
    </div>
  `
})
export class Yolo {
  constructor() {
    console.log('Yolo');
  }
}
