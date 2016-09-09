import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-footer',
  template: `
    <div class="section-footer">
      <div class="row" *ngIf="wavesImage">
        <div class="waves hidden-xs hidden-sm"></div>
      </div>
      <div class="clearfix to-bottom">
        <img class="pull-left left" [src]="leftImage">
        <img class="pull-right right" [src]="rightImage">
      </div>
      <div [class]="sectionBottom"></div>
    </div>
    `
})
export class SectionFooter {
  @Input('left') leftImage: string;
  @Input('right') rightImage: string;
  @Input('bottomClass') sectionBottom: string;
  @Input('waves') wavesImage: boolean;
}
