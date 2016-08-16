import { NgModule } from '@angular/core';
import { ContactUs } from './contactus';
export * from './contactus'

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ContactUs
  ],
  imports: [
    
  ],
  exports: [
    ContactUs
  ]
})
export default class ContactUsModule {
}

