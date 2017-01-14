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

            <talk name="Alex Castillo" twitter="castillo__io" tags="" tittle="NeuroJavascript II: Experimenting with thoughts via JavaScript" image="/assets/img/speakers/alex_castillo.png" url=".">
              The first NeuroJavascript talk series was all about visualizing brainwaves. Now that we can see thoughts in real time, it's time to start experimenting with the data and compare the results in order to understand how our brain works. 
              <br/><br/>
              Let's see how we can create and run behavioral experiments using Angular 2 and machine learning. 
            </talk>

            <talk name="Aysegul Yonet" twitter="AysSomething" tags="" tittle="How to run away from reality into the world of VR" image="/assets/img/speakers/aysegul_yonet.jpg" url=".">
              Do you want to run away from your reality and forget about everything? This talk is for you. We will create a webVR game and practice escapism using Angular and A-Frame. 
            </talk>

            <talk name="Minko Gechev" twitter="mgechev" tags="" tittle="Angular Performance Checklist" image="/assets/img/speakers/minko_gechev.jpg" url=".">
              High performance applications always bring better user engagement and experience. We often implicitly judge the quality of given application by it’s initial load time and responsiveness.
              <br/><br/>
              In the world of the single-page applications we usually have to transfer huge amount of resources over the wire which dramatically impacts the initial load time. On top of that, performing change detection over the entire component tree, corresponding to a complex UI, often causes frame drops because of heavy computations happening in the main thread.
              <br/><br/>
              In the first part of this talk we’re going explain essential practices that can help us reduce the initial load time of our Angular applications. In it’s second part, we’ll discuss different techniques which can improve the runtime performance of our application in order to help us achieve rendering with 60fps! 
            </talk>

           <talk name="Sebastian Witalec" twitter="sebawita" tags="" tittle="Sharing Code Between Web, Mobile Native and Desktop Apps" image="/assets/img/speakers/sebastian_witalec.jpg" url=".">
              In this talk I want to show how to use Angular 2 with NativeScript and Electron to build Web, Mobile and Desktop applications with shared core code between all platform.
              <br/><br/>
              The aim is to cover the best practice, show what is possible, how to get started, how to organise the project and explain why this is a big deal.
              <br/><br/>
              The demo project I am preparing is for a fun cross-platform app to control a real robot, which anyone will be able to contribute to or clone and create their own apps for multiple platforms.
            </talk>

           <talk name="Justin Schwartzenberger" twitter="schwarty" tags="" tittle="Bond or Bourne? Furiosa or Rey? What We Really Want to Know Is...Template or Reactive?" image="/assets/img/speakers/justin_schwarty.jpg" url=".">
              The battle for user input in the browser has been waged for ages...like since the dawn of HTML forms. Forever ago, the struggle began. Many have taken turns on the battlefield...jQuery, Knockout...even a youthful Angular. But in the summer of 2016, deep in the heart of Mountain View, arose a two-headed warrior that would turn the tide of the war. Forged from release candidate turmoil and last minute wholesale changes, came a scoped package with two powerhouse modules designed to dominate the forms landscape.
              <br/><br/>
              On one side stands the template-driven, with its ngForm secretly working in the shadows to wire itself up to form elements while its ngModel struts its stuff in broad daylight, just waiting to be two-way bound to elements. Encouraging the use of template reference variables to draw its operatives out from the shadows, the template-driven dominates the markup space and prides itself on never needing to venture behind the curtain to the code to get the job done.
              <br/><br/>
              The other side, reactive, is all business. Rules, regulations and repetition are the codes it lives by. Armed with its FormBuilder to lay down the blueprint for success and its formControlName, formGroupName and formArrayName directives ready to uphold the law in the markup landscape, reactive forms ensure that the collection of user data is consistent and precise. And with its valueChanges methods it has 24/7 surveillance running, always ready to tackle any challenge streamed its way.
              <br/><br/>
              So when you head out there in the field, with Angular by your side, which module should you import? Both are fully capable of getting the job done. Is one too lightweight? Is the other too overbearing? Both were forged for a reason. How do you choose? Do you need to choose? I will declassify the answers in this talk.
            </talk>

            <talk name="Uri Shaked" twitter="UriShaked" tags="" tittle="Dancing with Robots" image="/assets/img/speakers/uri_shaked.jpg" url=".">
              Let's party! Immersed in the Caribbean atmosphere, we will combine Angular and the Web Audio API and into an app that generates live Salsa music. Then, we will sprinkle some Web Bluetooth sauce to control the robots and get them moving with the music. This is not the standard sit-and-watch-my-slides session - prepare to move your body!
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
