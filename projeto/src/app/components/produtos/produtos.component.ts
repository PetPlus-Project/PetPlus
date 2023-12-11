import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  activeCategory: string = 'all';
  products: any[] = [];

  constructor(private productService: ProdutosService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
    this.productService.filteredProducts$.subscribe((filteredProducts) => {
      this.products = filteredProducts;
    });
    this.filterProducts('all');
  }

  filterProducts(category: string): void {
    this.activeCategory = category;
    if (category.toLowerCase() === 'all') {
      this.productService.filteredProductsSubject.next(this.productService.products);
    } else {
      const filteredProducts = this.productService.products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      this.productService.filteredProductsSubject.next(filteredProducts);
    }
  }
  trackByFn(index: number, item: any): string {
    return item.name; // Substitua 'name' pela propriedade única do produto
  }
}
