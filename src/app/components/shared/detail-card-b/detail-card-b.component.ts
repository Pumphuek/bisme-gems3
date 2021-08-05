import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-card-b',
  templateUrl: './detail-card-b.component.html',
  styleUrls: ['./detail-card-b.component.scss']
})
export class DetailCardBComponent {

  @Input('image-source') imageSource: string = '';
  @Input('header-text') headerText: string = '';
  @Input('description') description: string = '';
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