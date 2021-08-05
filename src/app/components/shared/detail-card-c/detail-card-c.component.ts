import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-card-c',
  templateUrl: './detail-card-c.component.html',
  styleUrls: ['./detail-card-c.component.scss']
})
export class DetailCardCComponent {

  @Input('image-source') imageSource: string[] = [];
  @Input('header-text') headerText: string = '';
  @Input('descriptions') descriptions: string[] = [];
  @Input('redirect-to') redirectTo?: string;

  constructor(
    public router: Router,
  ) { }

  onNavigate() {
    if(!this.redirectTo) {
      return
    }
    this.router.navigate([this.redirectTo]);
  }

  class(): string {
    return !!this.redirectTo ? 'row pointer' : 'row';
  }

}
