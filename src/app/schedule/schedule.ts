import { Component } from '@angular/core';

@Component({
    selector: 'schedule',
    styleUrls: [
      './schedule.style.css'
    ],
    template: `
  <div class="page">
    <div class="section" id="schedule">
      Schedule
    </div>
    <section class="bg-primary" id="session">
      <div class="container">
        <div class="navigation-header mtb24">
          <div class="centerBlock hidden-xs">
            <button class="main-btn grow" routerLink="." fragment="day1">Day 1</button>
            <button class="main-btn grow" routerLink="." fragment="day2">Day 2</button>
            <button class="main-btn grow" routerLink="." fragment="day3">Day 3</button>
            <button class="main-btn grow" routerLink="." fragment="day4">Day 4</button>
            <div class="centerBlock">
              <button class="main-btn grow" routerLink="." fragment="workshops">Workshops</button>
            </div>
          </div>
          <div class="centerBlock visible-xs-block">
            <div class="centerBlock"><button class="main-btn grow" routerLink="." fragment="day1">Day 1</button></div>
            <div class="centerBlock"><button class="main-btn grow" routerLink="." fragment="day2">Day 2</button></div>
            <div class="centerBlock"><button class="main-btn grow" routerLink="." fragment="day3">Day 3</button></div>
            <div class="centerBlock"><button class="main-btn grow" routerLink="." fragment="day4">Day 4</button></div>
            <div class="centerBlock"><button class="main-btn grow" routerLink="." fragment="workshops">Workshops</button></div>
          </div>
        </div>
        <div class="page-header" style="margin-top:80px" id="day1">
          <h2>Day 1</h2>
        </div>
        <ul class="timeline">
          <!--Registration-->
          <li>
            <div class="timeline-badge">
              <i class="fa fa-ship"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> May 29, <i class="fa fa-clock-o"></i> 11:30PM - 2PM</h5>
                <h3>Boarding</h3>
              </div>
            </div>
          </li><!--Welcome-->
          <li class="timeline-inverted">
            <div class="timeline-badge">
              <i aria-hidden="true" class="fa fa-heart"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar">&nbsp;<span style="font-family: filson-soft, sans-serif;">May 29,</span><span style="font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-family: filson-soft, sans-serif;">&nbsp;4:15</span><span style="font-family: filson-soft, sans-serif;">PM - 4:30PM</span></i></h5>
                <h3>Welcome</h3>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-badge">
              <i class="fa fa-star-o"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 29,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;4:30</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">PM - 5:15PM</span></i></h5>
                <h3>Keynote</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-comments-o"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 29,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;5:15</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">PM - 5:45PM</span></i></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Angular Panel</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-flask"></i>
            </div>
            <div class="timeline-panel room2">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> <span style="font-size: inherit;">May 29,</span><span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;8</span><span style="font-size: inherit;">PM - 10:30PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Unconference Sessions</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="page-header" style="margin-top:80px" id="day2">
          <h2>Day 2</h2>
        </div>
        <ul class="timeline">
          <li class="timeline-inverted">
            <div class="timeline-badge">
              <i aria-hidden="true" class="fa fa-heart"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar">&nbsp;<span style="font-family: filson-soft, sans-serif;">May 30,</span><span style="font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-family: filson-soft, sans-serif;">&nbsp;8A</span><span style="font-family: filson-soft, sans-serif;">M - 8:15AM</span></i></h5>
                <h3>Welcome</h3>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-badge">
              <i aria-hidden="true" class="fa fa-sun-o"></i>
            </div>
            <div class="timeline-panel room2">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar">&nbsp;<span style="font-family: filson-soft, sans-serif;">May 30,</span><span style="font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-family: filson-soft, sans-serif;">&nbsp;8A</span><span style="font-family: filson-soft, sans-serif;">M - 3PM</span></i></h5>
                <h3>Angular Open Space</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-wrench"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 30,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;8:15A</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">M - 8:45AM</span></i></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Interactive Angular</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-star-o"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 30,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;8:45A</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">M - 9:15AM</span></i></h5>
                <a [routerLink]="['/talks']" fragment="jeffbcross"><h3>Keynote. Top 5 Performance Mistakes of Angular Mobile Web Apps</h3></a>
              </div>
              <div class="timeline-body">
                <p>Jeff Cross</p>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> <span style="font-size: inherit;">May 30,</span><span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;9:15A</span><span style="font-size: inherit;">M - 9:45AM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-flash"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 30,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;9:45A</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">M - 10:15AM</span></i></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Lightning talks</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-coffee"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> <span style="font-size: inherit;">May 30,</span><span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;10:15A</span><span style="font-size: inherit;">M - 10:45AM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Break</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-trophy"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 30,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;10:45A</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">M - 11:15AM</span></i></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Angular Jeopardy</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> <span style="font-size: inherit;">May 30,</span><span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;11:15A</span><span style="font-size: inherit;">M - 11:45AM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-cutlery"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 30,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;11:45A</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">M - 1PM</span></i></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Lunch</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> <span style="font-size: inherit;">May 30,</span><span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;1P</span><span style="font-size: inherit;">M - 1:30PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-keyboard-o"></i>
            </div>
            <div class="timeline-panel room2">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> <span style="font-size: inherit;">May 30,</span><span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;1P</span><span style="font-size: inherit;">M - 3PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Build a Robot with Angular 2 + NativeScript Workshop</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 30,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;1:30P</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">M - 2PM</span></i></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> <span style="font-size: inherit;">May 30,</span><span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;2P</span><span style="font-size: inherit;">M - 2:30PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-comments-o"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 30,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;2:30P</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">M - 3PM</span></i></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Angular Panel</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-flask"></i>
            </div>
            <div class="timeline-panel room2">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> <span style="font-size: inherit;">May 30,</span><span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;8P</span><span style="font-size: inherit;">M - 10:30PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Unconference Sessions</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="page-header" style="margin-top:80px" id="day3">
          <h2>Day 3</h2>
        </div>
        <ul class="timeline">
          <li class="timeline-inverted">
            <div class="timeline-badge">
              <i aria-hidden="true" class="fa fa-heart"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar">&nbsp;<span style="font-family: filson-soft, sans-serif;">May 31,</span><span style="font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-family: filson-soft, sans-serif;">&nbsp;2:30P</span><span style="font-family: filson-soft, sans-serif;">M - 2:45PM</span></i></h5>
                <h3>Welcome</h3>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-badge">
              <i aria-hidden="true" class="fa fa-sun-o"></i>
            </div>
            <div class="timeline-panel room2">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar">&nbsp;<span style="font-family: filson-soft, sans-serif;">May 31,</span><span style="font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-family: filson-soft, sans-serif;">&nbsp;2:30P</span><span style="font-family: filson-soft, sans-serif;">M - 5:45PM</span></i></h5>
                <h3>Angular Open Space</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-wrench"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span></i>May 31,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;2:45P</span><span style="font-size: inherit;">M - 3:15PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Interactive Angular</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-keyboard-o"></i>
            </div>
            <div class="timeline-panel room2">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i> <span style="font-size: inherit;">May 31,</span><span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;3P</span><span style="font-size: inherit;">M - 5PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Mastering Angular 2 Animations Workshop</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span></i>May 31,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;3:15P</span><span style="font-size: inherit;">M - 3:45PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">May 31,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;3:45P</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">M - 4:15PM</span></i></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-coffee"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span></i>May 31,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;4:15P</span><span style="font-size: inherit;">M - 4:45PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Break</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i>&nbsp;May 31,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;4:45P</span><span style="font-size: inherit;">M - 5:15PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
              <div class="timeline-body"></div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-comments-o"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span></i>May 31,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;5:15P</span><span style="font-size: inherit;">M - 5:45PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Angular Panel</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-flask"></i>
            </div>
            <div class="timeline-panel room2">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i>&nbsp;May 31,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;8P</span><span style="font-size: inherit;">M - 10:30PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Unconference Sessions</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="page-header" style="margin-top:80px" id="day4">
          <h2>Day 4</h2>
        </div>
        <ul class="timeline">
          <li class="timeline-inverted">
            <div class="timeline-badge">
              <i aria-hidden="true" class="fa fa-heart"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar">&nbsp;<span style="font-family: filson-soft, sans-serif;">June 1,</span><span style="font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-family: filson-soft, sans-serif;">&nbsp;2:30P</span><span style="font-family: filson-soft, sans-serif;">M - 2:45PM</span></i></h5>
                <h3>Welcome</h3>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-badge">
              <i aria-hidden="true" class="fa fa-sun-o"></i>
            </div>
            <div class="timeline-panel room2">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar">&nbsp;<span style="font-family: filson-soft, sans-serif;">June 1,</span><span style="font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-family: filson-soft, sans-serif;">&nbsp;2:30P</span><span style="font-family: filson-soft, sans-serif;">M - 5:45PM</span></i></h5>
                <h3>Angular Open Space</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-wrench"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span></i>June 1,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;2:45P</span><span style="font-size: inherit;">M - 3:15PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Interactive Angular</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span></i>June 1,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;3:15P</span><span style="font-size: inherit;">M - 3:45PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-coffee"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">June 1,</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">&nbsp;3:45P</span><span style="font-size: inherit; font-family: filson-soft, sans-serif;">M - 4:15PM</span></i></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Break</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-microphone"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span></i>June 1,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;4:15P</span><span style="font-size: inherit;">M - 4:45PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Talk</h3>
              </div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-star-o"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i>&nbsp;June 1,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;4:45P</span><span style="font-size: inherit;">M - 5:15PM</span></h5>
                <a [routerLink]="['/talks']" fragment="victorsavkin"><h3>Closing Keynote. On the source of truth. How to manage state in Angular apps.</h3></a>
              </div>
              <div class="timeline-body">Victor Savkin</div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class=" timeline-badge">
              <i class="fa fa-comments-o"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"><span style="font-size: inherit;">&nbsp;</span></i>June 1,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;5:15P</span><span style="font-size: inherit;">M - 5:45PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Angular Panel</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
          <li>
            <div class=" timeline-badge">
              <i class="fa fa-flask"></i>
            </div>
            <div class="timeline-panel room2">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar"></i>&nbsp;June 1,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;8P</span><span style="font-size: inherit;">M - 10:30PM</span></h5>
                <h3 style="font-family: filson-soft, sans-serif; color: rgb(73, 73, 86);">Unconference Sessions</h3>
              </div>
              <div class="timeline-body"></div>
            </div>
          </li>
        </ul>
      </div>

      <div class="container">
        <div class="page-header" style="margin-top:80px" id="workshops">
          <h2>Day 6</h2>
        </div>
        <ul class="timeline">
          <li class="timeline-inverted">
            <div class="timeline-badge">
              <i aria-hidden="true" class="fa fa-graduation-cap"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar">&nbsp;</i>June 3,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;9:00A</span><span style="font-size: inherit;">M - 5PM</span></h5>
                <a [routerLink]="['/workshops']" fragment="BenLesh"><h3>RxJS By Example<br></h3></a>
              </div>
              <div class="timeline-body">Ben Lesh</div>
            </div>
          </li>
           <li class="timeline-inverted">
            <div class="timeline-badge">
              <i aria-hidden="true" class="fa fa-graduation-cap"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h5 class="timeline-title"><i class="fa fa-calendar">&nbsp;</i>June 3,<span style="font-size: inherit;">&nbsp;</span><span class="fa fa-clock-o" style="font-size: 14px;"></span><span style="font-size: inherit;">&nbsp;9:00A</span><span style="font-size: inherit;">M - 5PM</span></h5>
                <a [routerLink]="['/workshops']" fragment="josepheames"><h3>Angular 2 Testing Front to Back</h3></a>
              </div>
              <div class="timeline-body">Joe Eames</div>
            </div>
          </li>

        </ul>
      </div>

    </section>
  </div>
  `
})
export class Schedule { }