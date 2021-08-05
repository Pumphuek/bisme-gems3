import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  @Input('image-source') imageSource: string = '';
  @Input('intro-text-header') introTextHeader: string = '';
  @Input('intro-text-content') introTextContent: string = '';
  @Input('page-name') pageName: string = '';

}
