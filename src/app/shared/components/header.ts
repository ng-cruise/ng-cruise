import { Component } from '@angular/core';

@Component({
  selector: 'myheader',
  template: `
    <div>
      <navbar class="navbar navbar-custom navbar-fixed-top top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed custom-nav-bar" data-toggle="collapse" data-target="#collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="collapse">
            <div class="row hidden-xs">
              <div class="col-xs-2 col-xs-offset-1 menu">
                <div class="centerBlock" routerLinkActive="active"><a routerLink="/talks">Speakers</a></div>
              </div>
              <div class="col-xs-2 menu">
                <div class="centerBlock"><a routerLink="/tickets-terms" fragment="tickets-terms">Tickets</a></div>
              </div>
              <div class="col-xs-2">
                <div class="centerBlock">
                  <div class="logo" routerLink="/home" fragment="top">
                    <div class="logo-icon centerBlock"><img class="logo-img" src="assets/img/NG-Cruise-Logo-Normal.png"></div>
                  </div>
                </div>
              </div>
              <div class="col-xs-2 menu">
                <div class="centerBlock"><a routerLink="/workshops">Workshops</a></div>
              </div>
              <div class="col-xs-2 menu">
                <div class="centerBlock"><a routerLink="/cruise" fragment="cruise">Cruise</a></div>
              </div>
            </div>
            <div class="visible-xs">
              <ul class="nav">
                <li routerLinkActive="active">
                  <a routerLink="/home" fragment="top">Home</a>
                </li>
                <li routerLinkActive="active">
                  <a routerLink="/talks">Speakers</a>
                </li>
                <li routerLinkActive="active">
                  <a routerLink="/tickets-terms" fragment="tickets-terms">Tickets</a>
                </li>
                <li routerLinkActive="active">
                  <a routerLink="/workshops">Workshops</a>
                </li>
                <li routerLinkActive="active">
                  <a routerLink="/cruise" fragment="cruise">Cruise</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </navbar>
    </div>
  `
})
export class Header {
  constructor() { }
}
