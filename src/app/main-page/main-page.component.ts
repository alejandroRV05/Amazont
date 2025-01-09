import { Component } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Product } from '../interfaces/product.interface';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  categories: Category[] = [
    { id: 1, name: 'Droguería' },
    { id: 2, name: 'Juegos' },
    { id: 3, name: 'Deportes' },
    { id: 4, name: 'Cocina' },
    { id: 5, name: 'Ropa' },
    { id: 6, name: 'Electrónica' },
    { id: 7, name: 'Herramientas' },
    { id: 8, name: 'Mascotas' },
    { id: 9, name: 'Libros' },
    { id: 10, name: 'Jardín' },
  ];

  tendencias: Category[] = [
    { id: 1, name: 'Droguería' },
    { id: 2, name: 'Juegos' },
    { id: 3, name: 'Deportes' },
    { id: 4, name: 'Cocina' },
    { id: 5, name: 'Ropa' },
  ];

  products: Product[] = [
    { id: 1, name: 'Detergente', url: 'https://picsum.photos/id/237/200/200' },
    { id: 2, name: 'Monopoly', url: 'https://picsum.photos/id/238/200/200' },
    { id: 3, name: 'Balón', url: 'https://picsum.photos/id/239/200/200' },
    { id: 4, name: 'Sartén', url: 'https://picsum.photos/id/240/200/200' },
    { id: 5, name: 'Camisa', url: 'https://picsum.photos/id/241/200/200' },
    { id: 6, name: 'Smartphone', url: 'https://picsum.photos/id/242/200/200' },
  ];

  //Funciones relacionadas con los productos
  id1: number = 1;
  id2: number = 2;
  id3: number = 3;

  getLeftProduct(): string {
    return this.products[this.id1].url;
  }

  getCenterProduct(): string {
    return this.products[this.id2].url;
  }

  getRightProduct(): string {
    return this.products[this.id3].url;
  }

  nextProduct() {
    const totalProducts = this.products.length;
    this.id1 = (this.id1 + 1) % totalProducts;
    this.id2 = (this.id2 + 1) % totalProducts;
    this.id3 = (this.id3 + 1) % totalProducts;
  }

  previousProduct() {
    const totalProducts = this.products.length;
    this.id1 = (this.id1 - 1 + totalProducts) % totalProducts;
    this.id2 = (this.id2 - 1 + totalProducts) % totalProducts;
    this.id3 = (this.id3 - 1 + totalProducts) % totalProducts;
  }

  p1: number = 1;
  p2: number = 2;
  p3: number = 3;
  p4: number = 4;

  getProduct1(): string {
    return this.products[this.p1].url;
  }

  getProduct2(): string {
    return this.products[this.p2].url;
  }

  getProduct3(): string {
    return this.products[this.p3].url;
  }

  getProduct4(): string {
    return this.products[this.p4].url;
  }

  nextProduct2() {
    const totalProducts = this.products.length;
    this.p1 = (this.p1 + 1) % totalProducts;
    this.p2 = (this.p2 + 1) % totalProducts;
    this.p3 = (this.p3 + 1) % totalProducts;
    this.p4 = (this.p4 + 1) % totalProducts;
  }

  previousProduct2() {
    const totalProducts = this.products.length;
    this.p1 = (this.p1 - 1 + totalProducts) % totalProducts;
    this.p2 = (this.p2 - 1 + totalProducts) % totalProducts;
    this.p3 = (this.p3 - 1 + totalProducts) % totalProducts;
    this.p4 = (this.p4 - 1 + totalProducts) % totalProducts;
  }

  //Funciones relacionadas con las categorías
  cat1: number = 1;
  cat2: number = 2;
  cat3: number = 3;
  cat4: number = 4;
  cat5: number = 5;

  getCategory1(): string {
    return this.categories[this.cat1].name;
  }

  getCategory2(): string {
    return this.categories[this.cat2].name;
  }

  getCategory3(): string {
    return this.categories[this.cat3].name;
  }

  getCategory4(): string {
    return this.categories[this.cat4].name;
  }

  getCategory5(): string {
    return this.categories[this.cat5].name;
  }

  nextCategory() {
    const totalCategories = this.categories.length;
    this.cat1 = (this.cat1 + 1) % totalCategories;
    this.cat2 = (this.cat2 + 1) % totalCategories;
    this.cat3 = (this.cat3 + 1) % totalCategories;
    this.cat4 = (this.cat4 + 1) % totalCategories;
    this.cat5 = (this.cat5 + 1) % totalCategories;
  }

  previousCategory() {
    const totalCategories = this.categories.length;
    this.cat1 = (this.cat1 - 1 + totalCategories) % totalCategories;
    this.cat2 = (this.cat2 - 1 + totalCategories) % totalCategories;
    this.cat3 = (this.cat3 - 1 + totalCategories) % totalCategories;
    this.cat4 = (this.cat4 - 1 + totalCategories) % totalCategories;
    this.cat5 = (this.cat5 - 1 + totalCategories) % totalCategories;
  }
}
