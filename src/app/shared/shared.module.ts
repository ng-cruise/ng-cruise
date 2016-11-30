import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Profile } from './components/profile';

@NgModule({
  imports:      [ CommonModule, RouterModule ],
  declarations: [ Header, Footer, Profile ],
  exports:      [ Header, Footer, Profile, CommonModule ]
})
export class SharedModule { }
