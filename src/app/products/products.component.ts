import { Component, input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  name = input.required<string>();
  url = input.required<string>();
  price = input.required<number>();
  stars = input.required<number>();
  discount = input<number>();

  numberStars: string = '';
  discountedPrice: number = 0;

  getStars() {
    for (let i = 0; i < this.stars(); i++) {
      this.numberStars += '⭐';
    }
  }

  getDiscount() {
    const discount = this.discount() || 0;
    this.discountedPrice = this.price() - (this.price() * discount) / 100;
    // console.debug('Discounted price:', this.discountedPrice);
  }

  ngOnInit() {
    this.getStars();
    this.getDiscount();
  }
}
