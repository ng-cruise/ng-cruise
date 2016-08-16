import { NgModule } from '@angular/core';
import { Yolo } from './home';

export * from './home';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Yolo
  ],
  imports: [
  ],
})
export default class HomeModule {
}

