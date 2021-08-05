import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent {

  @Input('product-name') productName: string = '';
  @Input('descriptions') descriptions: string[] = [];
  @Input('redirect-to') redirectTo?: string;
  @Input('price') price: number = 0;

  constructor(
    public router: Router,
  ) { }

  onNavigate() {
    if(!this.redirectTo) {
      return
    }
    this.router.navigate([this.redirectTo]);
  }

}
