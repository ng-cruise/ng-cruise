import { Component } from '@angular/core';

@Component({
    selector: 'cruise',
    template: `
  <div class="page">
    <div class="section" id="cruise">
      Cruise
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 conduct">
        <div>
          <h3>Cruise Itinerary</h3>
          <h4>Day 1&ndash;29th May &mdash; Departs Miami at&nbsp;4pm&nbsp;</h4>
          <p>Miami is a major cosmopolitan city with world-renowned beaches,
          unrivaled nightlife and Latin flavor.</p>
          <h4>Day 2&ndash;30th May &mdash; Nassau, Bahamas (8am
          till&nbsp;11:59pm)</h4>
          <p>With dazzling beaches, turquoise waters and vibrant Junkanoo
          culture, Nassau is a great place to sun and sightsee.</p>
          <h4>Day 3&ndash;31st May &mdash; CocoCay, Bahamas (8am
          till&nbsp;5pm)&nbsp;</h4>
          <p>Royal Caribbean&rsquo;s private island &mdash; Lots of activities
          including snorkeling, kayaking, jet-ski rentals, aqua park &amp;
          nature walks</p>
          <h4>Day 4&ndash;01st June &mdash; Key West, Florida (10am
          till&nbsp;6pm)</h4>
          <p>The southernmost city in the USA is laid-back, eclectic and
          brimming with island charm. Discover Key West&rsquo;s 19th-century
          character in Old Town, whose leafy streets are lined with Victorian
          homes, quaint cottages and grand mansions.</p>
          <h4>Day 5&ndash; 2nd June &mdash; Arrives Miami at&nbsp;7:30am</h4>
          <h3>Conference Timings (Spolight&nbsp;Theatre)</h3>
          <ul>
            <li>Monday 4:15pm to 5:45pm</li>
            <li>Tuesday 8:00am to 3:00pm</li>
            <li>Wednesday 2:30pm to 5:45pm</li>
            <li>Thursday 2:30pm to 5:45pm</li>
          </ul>
<div class="carousel slide" data-ride="carousel" id="myCarousel" style="max-width:300px">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#myCarousel">
                </li>
                <li data-slide-to="1" data-target="#myCarousel"></li>
                </ol><!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img class="room" alt="Spotlight Picture" src=
                    "/assets/img/venue/spotlight_theater.jpg" style="max-width:300px">
                </div>
                <div class="item">
                    <img class="room" alt="Spotlight Picture" src=
                    "/assets/img/venue/spotlight_2.jpg" style="max-width:300px">
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

          <h3>What&rsquo;s&nbsp;Included</h3>
          <ol>
            <li><strong>Accommodation</strong>. In the room type chosen at time
            of booking</li>
            <li><strong>Dining</strong>. Breakfast, Lunch and Dinner at
            specified Restaurants</li>
            <li><strong>Ship Activities</strong>. Such as Rock
            Climbing &mdash; All equiment including helmets and Harnesses will
            be included</li>
            <li><strong>Entertainment.</strong> World class performances from
            all over the world</li>
            <li><strong>Fitness Centre.</strong> From state-of-the-art
            equipment to all the latest classes, we&rsquo;ve got everything the
            most sophisticated fitness clubs have &mdash; plus an amazing
            view.</li>
          </ol>
          <h3>Not Included</h3>
          <ul>
            <li>Alcoholic drinks</li>
          </ul>
          <h3>Dining&nbsp;Details</h3>
          <p>Enjoy a warm, full meal for breakfast and a multi-course feast for
          dinner in the Main Dining Room</p>
          <p>Options abound in the <strong>Windjammer
          Caf&eacute; </strong>&mdash; perfect for a quick lunch or a casual
          meal.</p>
          <p>Meals from many onboard venues, such as the Main Dining Room and
          <strong>Windjammer Caf&eacute;</strong>, are included in the price of
          your cruise.&nbsp;</p>
          <p>Our Specialty Restaurants &mdash; like Chops Grille &mdash; offer
          amazing food in a restaurant atmosphere.</p>
          <p>There is a service charge per person to dine at <strong>Chops
          Grille</strong> and <strong>Johnny Rockets</strong>. Prices are
          subject to change.</p>
          <p>We can accommodate dietary needs such as:</p>
          <ul>
            <li><strong>Vegetarian Meals</strong> (including Indian-style
            vegetarian) are available on all menus in the Dining Room and
            Windjammer Cafe every day. Guests do not need to make a special
            request for these meals.</li>
            <li><strong>Lactose-free/soy milk</strong>, Ensure, and kosher
            meals are available no extra charge. All you have to do is notify
            us at least 45 days prior to sailing</li>
            <li><strong>Kosher for Passover</strong> meal requests MUST be
            received 90 days in advance in order to be accommodated.</li>
          </ul>
          <p>Guests may not bring on board any food items other than baby food
          and/or dry, nonperishable snack items (cookies, crackers, chips,
          energy bars, etc).</p>
          <h3>Beverages</h3>
          <p>Guests wishing to bring personal wine and champagne onboard may do
          so only on boarding day, limited to two (2) 750 ml bottles per
          stateroom.&nbsp;</p>
          <p>Additional bottles of wine beyond two (2) bottles that are brought
          onboard or any alcoholic beverages purchased in ports of call or from
          Shops On Board will be stored by the ship and delivered to your
          stateroom on the last day of the sailing. Wine may be consumed in any
          shipboard restaurant, dining venue, or within the guests&rsquo;
          stateroom.&nbsp;</p>
          <p><strong>Wine brought onboard may not be shared for consumption in
          private group events, and/or in lounges made private for the
          exclusive use of a group.</strong></p>
          <p><strong>Alcohol is not included in the price of the
          cruise</strong> &mdash; It may be purchased at the bars and
          restaurants onboard.&nbsp;</p>
          <p>There are pre paid beverage packages available &mdash; Please
          contact us (ngcruise@travelwithterra.com) for details.</p>
          <h3>Booking Changes</h3>
          <p>Cruise accommodations cannot be changed</p>
          <p>Name changes are fine to do before 1st of February, 2017.</p>
          <h3>Ship Information</h3>
          <p><a href=
          "https://www.royalcaribbean.co.uk/our-ships/enchantment-of-the-seas/"
          target="_blank">Enchantment of the seas</a></p>
          <ul>
            <li>Occupancy: 2252</li>
            <li>Tonnage: 81,000</li>
            <li>Length: 989 feet</li>
            <li>Cruising Speed: 22 knots ( 25.3 mph)</li>
            <li>Entered Service: July 13, 1997&nbsp;</li>
            <li>Last Refurbished: December 2012</li>
          </ul>
          <h3>Useful Resources</h3>
          <ul>
            <li>
              <a href=
              "https://www.royalcaribbean.co.uk/our-ships/enchantment-of-the-seas/"
              target="_blank">Cruise Ship: Enchantment of the seas</a>
            </li>
            <li>
              <a href=
              "https://www.royalcaribbean.co.uk/frequently-asked-questions/"
              target="_blank">Royal Caribbean FAQs</a>
            </li>
          </ul>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
  `
})
export class Cruise {

}
