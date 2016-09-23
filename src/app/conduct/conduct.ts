import { Component } from '@angular/core';

@Component({
  selector: 'conduct',
  template: `
    <div>
      <div class="section" id="speakers">Code of Conduct</div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 conduct">
          <p>
              <strong>ng-cruise</strong> is dedicated to making our conference a friendly, safe, and welcoming environment free from harassment or intimidation
              of any kind. In order to create a place we can <strong>ALL</strong> feel welcome, we have created the following anti-harassment policy.
              This policy is enforced at all conference events including after hours entertainment, parties, off-site events, or
              even when you are alone with a conference attendee.
          </p>
          <br>
          <ul>
              <li>Verbal comments or imagery that reinforce social structures of domination (related to gender, gender identity and
              expression, sexual orientation, disability, physical appearance, body size, race, or religion) are not cool. Don’t
              do it.</li>
              <li>Sexual images or other images that could offend should not be shown in public spaces. If in doubt, take it out.</li>
              <li>Please keep unstructured critique to a minimum. Who knows, many strange ideas have turned out to be genius… hello
              laptop computers.</li>
              <li>Refrain from recording or photographing someone if it is not welcomed. No one likes their mug on display without
              their consent.</li>
              <li>Keep your hands to yourself… no inappropriate physical contact!</li>
              <li>Leave people alone…no one likes unwelcome sexual attention, and we just won’t allow it!</li>
              <li>At <strong>ng-cruise</strong> we accept and value all people no matter their gender, gender identity and expression, sexual orientation,
              disability, physical appearance, body size, race, or religion. If you are rude, attempt to socially dominate or
              make any of our friends feel unwelcome due to these or any other differences, we might have to chat.</li>
              <li>Advocating for, or encouraging any of the above behavior is not okay. In general, please be kind and courteous. Mean
              people suck.</li>

          </ul>
          <p>
              Speakers, exhibitors in the expo hall, sponsor or vendor booths, or similar activities are also subject to the code of conduct.
              In particular, we don’t like to see sexualized images, activities, or other material. Booth staff (including volunteers)
              should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.
          </p>
          <br>
          <p>
              If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including
              warning the offender or expulsion from the conference [with no refund].
          </p>
          <br>
          <p>
              If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member
              of conference staff immediately. We will be happy to help participants contact hotel/venue security or local law
              enforcement, provide escorts, or otherwise assist those experiencing harassment feel safe while here at the conference.
          </p>
          <br>
          <p>
              The <strong>ng-cruise</strong> community is an inclusive community where developers, designers, and entrepreneurs of all skill levels, genders, religions, and backgrounds
              are welcome to learn, practice, and share knowledge and wisdom surrounding Angular and JavaScript in general. Our motto is <q>Be excellent to each other</q> If you see or 
              experience anything different please contact <a href="mailto:howdy@ngcruise.com">howdy@ngcruise.com</a>. 
          </p>
          <br>
          <p>
            This Code of Conduct was adopted and adapted from ngconf's own <a href="https://www.ng-conf.org/#/conduct" target="_blank">Code of Conduct</a>.
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  `
})
export class Conduct {

}
