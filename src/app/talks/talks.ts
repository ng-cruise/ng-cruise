import { Component } from '@angular/core';

@Component({
    selector: 'talks',
    template: `
      <div class="page">
        <div class="section" id="talks">
          Talks
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8 talks">
            <talk name="Jeff Cross" twitter="jeffbcross" tags="" tittle="Keynote" image="/assets/img/speakers/jeff_cross.jpg" url=".">
            </talk>
            <talk name="Victor Savkin" twitter="victorsavkin" tags="" tittle="Keynote" image="/assets/img/speakers/victor_savkin.jpg" url=".">
            </talk>
            <talk name="Ben Lesh" twitter="BenLesh" tags="RxJS; Angular 2" tittle="RxJS By Example" image="/assets/img/speakers/ben_lesh.jpg" url=".">
              You know what RxJS is, you know how to use Angular 2, but are you sure of how you should use them together? In this talk, we'll go over how to implement a real world feature in Angular 2 with RxJS that composes user interactions, animations, AJAX and cancellation at the same time.
            </talk>
            <talk name="Aaron Frost" twitter="js_dev" tags="Components" tittle="CaaS: Components as a Service" image="/assets/img/speakers/aaron_frost.jpg" url=".">
              Throughout our Angular templates, we have included many of our wonderful reusable components, even though many of them will rarely be shown. In the name of performance, I propose that we follow a different design pattern for these pieces. That pattern being: Components as a Service. Rather than instantiating your component through you Angular template, you instantiate it with a call to a service. Let's walk through CaaS in Angular 1 and 2, and take this pattern out for it's maiden voyage (get it)!
            </talk>
            <talk name="Mike Brocchi" twitter="Brocco" tags="Angular CLI" tittle="Angular CLI" image="/assets/img/speakers/mike_brocchi.jpg" url=".">
              In Angular the go-to tool is the CLI, but it is still in it's infancy and will continue to grow. Come learn from one of the core team members how just how far it can go. From new features to performance all the way to customizations the CLI is poised to make your life as a developer easier.
            </talk>
            <talk name="Alyssa Nicoll" twitter="AlyssaNicoll" tags="Animations; CSS" tittle="Animations in an Angular World" image="/assets/img/speakers/alyssa_nicoll.jpg" url=".">
              If we aren't doing it for the users, who are we doing it for? How often have you used something — or even more painfully, witnessed someone using something — that was poorly designed? Perhaps the creators did not fully think through their product. Perhaps they were lazy. Whatever the case, in the end, the user is the one who suffers.

              As we go about building killer Angular apps to take over the world, it is vital that we keep in mind our users and their end needs. In this show, Alyssa will dive into the psyche of the user, the vitality of giving feedback, and how to use CSS Animations to provide that feedback and create a seamless flow between user and technology.
            </talk>
            <div class="row panelists">
              <div class="col-md-4">
                <profile name="Tracy Lee" twitter="ladyleet" image="/assets/img/organisers/tracy-lee.jpg" url=".">
                  Host
                </profile>
              </div>      
              <div class="col-md-4">
                <profile name="Joe Eames" twitter="josepheames" image="/assets/img/organisers/joe-eames.jpeg" url=".">
                  Panel Moderator
                </profile>
              </div>
              <div class="col-md-4">
                <profile name="Gerard Sans" twitter="gerardsans" image="/assets/img/organisers/gerard-sans.jpg" url=".">
                  Panel Moderator
                </profile>
              </div>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
  `
})
export class Talks {

}
