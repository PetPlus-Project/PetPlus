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
    this.productService.filteredProducts$.subscribe((filteredProducts) => {
      this.products = filteredProducts;
    });
  }

  filterProducts(category: string): void {
    this.activeCategory = category;
    this.productService.filterProducts(category);
  }
  trackByFn(index: number, item: any): string {
    return item.name; // Substitua 'name' pela propriedade única do produto
  }
}
