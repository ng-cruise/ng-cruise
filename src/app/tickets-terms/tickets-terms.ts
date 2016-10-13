import { Component } from '@angular/core';

@Component({
    selector: 'cruise',
    template: `
  <div class="page">
    <div class="section" id="tickets-terms">
      Tickets
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 conduct">
        <div>
          <p>Read carefully before registering for the event</p>
          <h3>Tickets Types</h3>
          <p>There are two different types of tickets:</p>
          <ul>
            <li>Conference tickets</li>
            <li>Accommodation package tickets: shared or individual use.</li>
          </ul>

          <h3>Conference Tickets</h3>
          <p>This ticket gives you full access to ngcruise 2017 conference. Note this ticket doesn't cover for accommodation. You must book an Accommodation package separately.</p>

          <h4>Tickets Schedule</h4>
          <ul>
            <li>Early bird ticket: <strong>$550</strong>. Only 50 tickets available until 1st of January.</li>
            <li>Regular ticket: <strong>$650</strong>. Until 1st of May.</li>
            <li>Late bird ticket: <strong>$750</strong>. After 1st of May.</li>
          </ul>

          <h3>Accommodation Tickets</h3>
          <p>This includes an accommodation package (room type) plus <strong>gratuities $54</strong> and pre-purchase <strong>WiFi $60</strong>. This ticket does not give you access to the conference.</p>

          <h4>Room Types</h4>
            <div class="carousel slide" data-ride="carousel" id="myCarousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#myCarousel">
                </li>
                <li data-slide-to="1" data-target="#myCarousel"></li>
                </ol><!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img class="room" alt="Oceanview Stateroom" src=
                    "/assets/img/rooms/vis-oceanview-1.jpg">
                    <div class="carousel-caption">
                    <h3>Large Oceanview Stateroom</h3>
                    <p class="hidden-xs">These larger staterooms offer a gorgeous view, two twin beds and a private bathroom.</p>
                    </div>
                </div>
                <div class="item">
                    <img class="room" alt="Interior Stateroom" src=
                    "/assets/img/rooms/vis-interior-1.jpg">
                    <div class="carousel-caption">
                    <h3>Interior Stateroom</h3>
                    <p class="hidden-xs">This standard stateroom offers two twin beds, a private bath and all the amenities of our standard staterooms.</p>
                    </div>
                </div>
                </div>
                <!-- Left and right controls -->
                <a class="left carousel-control" data-slide="prev" href=
                "#myCarousel" role="button"><span aria-hidden="true" class=
                "glyphicon glyphicon-chevron-left"></span> <span class=
                "sr-only">Previous</span></a> <a class="right carousel-control"
                data-slide="next" href="#myCarousel" role=
                "button"><span aria-hidden="true" class=
                "glyphicon glyphicon-chevron-right"></span> <span class=
                "sr-only">Next</span></a>
            </div>
          <p>Room Types</p>
          <ul>
            <li><strong>Large Oceanview Stateroom</strong> These larger staterooms offer a gorgeous view, two twin beds and a private bathroom. Two twin beds (can convert into queen-size), sitting area with sofa, vanity area and a private bathroom. Please note: Staterooms 3000-3014, 3500-3514, 2010-2014, & 2510-2514 have two portholes instead of a window. Approximate size 151.8 sq. ft.</li>
            <li><strong>Interior Stateroom</strong> This standard stateroom offers two twin beds, a private bath and all the amenities of our standard staterooms. Two twin beds (can convert into queen-size), vanity area, and a private bathroom. Approximate size 132.4 sq. ft.</li>
          </ul>

          <h4>Accomodation Options</h4>
          <ul>
            <li><strong>Shared</strong>. Max 2 persons per cabin. You need to fill in the Full Name of a person to be matched with or state your preferences during registration. For 3 and 4 occupancy contact <a href="mailto:ngcruise@travelwithterra">ngcruise@travelwithterra.com</a> within 7 days of booking.</li>
            <li><strong>Individual use</strong>. You also have the option to have the room without pairing.</li>
          </ul>
          
          <div class="centerBlock">
            <button class="main-btn" onclick="window.open('https://ti.to/ngcruise/ngcruise17','_blank');return false;">Buy</button>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
  `
})
export class TicketsTerms {

}
