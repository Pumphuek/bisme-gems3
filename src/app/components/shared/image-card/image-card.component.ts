import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {

  @Input('image-source') imageSource: string = '';
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

  cardClass(): string {
    return !!this.redirectTo ? 'card bg-image card-ratio pointer' : 'card bg-image card-ratio';
  }

}
