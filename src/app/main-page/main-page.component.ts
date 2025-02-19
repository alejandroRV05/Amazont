import { Component, computed, signal } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Product } from '../interfaces/product.interface';
import { CategoryComponent } from '../category/category.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CategoryComponent, ProductsComponent],
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
    {
      id: 1,
      name: 'Detergente',
      url: 'https://www.supercash.es/wp-content/uploads/2020/02/detergente-profesional_cabecera.png',
      price: 10.0,
      stars: 4,
      discount: 50,
    },
    {
      id: 2,
      name: 'Monopoly',
      url: 'https://www.monodejuegos.shop/wp-content/uploads/2020/11/monopoly.png',
      price: 20.0,
      stars: 5,
      discount: 25,
    },
    {
      id: 3,
      name: 'Balón',
      url: 'https://i1.t4s.cz/products/in9365/adidas-euro24-com-679082-in9365.png',
      price: 15.0,
      stars: 3,
      discount: 10,
    },
    {
      id: 4,
      name: 'Sartén',
      url: 'https://cdn.speedsize.com/7ea397ab-9451-4e4a-a8e0-a877fed40d95/https://www.arcos.com/media/catalog/product/7/1/716400_1.png',
      price: 25.0,
      stars: 4,
      discount: 20,
    },
    {
      id: 5,
      name: 'Camisa',
      url: 'https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/normal/png-546x410px/26501189.png',
      price: 30.0,
      stars: 5,
      discount: 30,
    },
    {
      id: 6,
      name: 'Smartphone',
      url: 'https://oukitel.com/cdn/shop/files/1___11.png?v=1732246275&width=600',
      price: 500.0,
      stars: 4,
      discount: 40,
    },
  ];

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

  /*************************** */
  // Índices visibles
  s1: number = 0;
  s2: number = 1;
  s3: number = 2;
  s4: number = 3;

  // Obtener productos visibles
  get visibleProducts(): Product[] {
    return [
      this.products[this.s1],
      this.products[this.s2],
      this.products[this.s3],
      this.products[this.s4],
    ];
  }

  // Mover el carrusel hacia adelante
  next(): void {
    const totalProducts = this.products.length;

    this.s1 = (this.s1 + 1) % totalProducts;
    this.s2 = (this.s2 + 1) % totalProducts;
    this.s3 = (this.s3 + 1) % totalProducts;
    this.s4 = (this.s4 + 1) % totalProducts;
  }

  // Mover el carrusel hacia atrás
  previous(): void {
    const totalProducts = this.products.length;

    this.s1 = (this.s1 - 1 + totalProducts) % totalProducts;
    this.s2 = (this.s2 - 1 + totalProducts) % totalProducts;
    this.s3 = (this.s3 - 1 + totalProducts) % totalProducts;
    this.s4 = (this.s4 - 1 + totalProducts) % totalProducts;
  }

  // Índices visibles
  d1: number = 0;
  d2: number = 1;
  d3: number = 2;
  d4: number = 3;

  // Obtener productos visibles
  get visibleDiscount(): Product[] {
    return [
      this.products[this.d1],
      this.products[this.d2],
      this.products[this.d3],
      this.products[this.d4],
    ];
  }

  // Mover el carrusel hacia adelante
  next_discount(): void {
    const totalProducts = this.products.length;

    this.d1 = (this.d1 + 1) % totalProducts;
    this.d2 = (this.d2 + 1) % totalProducts;
    this.d3 = (this.d3 + 1) % totalProducts;
    this.d4 = (this.d4 + 1) % totalProducts;
  }

  // Mover el carrusel hacia atrás
  previous_discount(): void {
    const totalProducts = this.products.length;

    this.d1 = (this.d1 - 1 + totalProducts) % totalProducts;
    this.d2 = (this.d2 - 1 + totalProducts) % totalProducts;
    this.d3 = (this.d3 - 1 + totalProducts) % totalProducts;
    this.d4 = (this.d4 - 1 + totalProducts) % totalProducts;
  }
}
