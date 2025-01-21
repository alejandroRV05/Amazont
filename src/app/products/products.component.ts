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
  price = input.required<string>();
  stars = input.required<number>();

  numberStars: string = '';

  getStars() {
    for (let i = 0; i < this.stars(); i++) {
      this.numberStars += '⭐';
    }
  }

  ngOnInit() {
    this.getStars();
  }
}
