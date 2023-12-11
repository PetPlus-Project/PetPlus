import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  activeCategory: string = 'all';
  originalProducts: any[] = [];
  products: any[] = [];

  constructor(public productService: ProdutosService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((allProducts) => {
      this.originalProducts = allProducts;
      this.filterProducts('all'); // Filtrar produtos ao carregar a página
    });
  }

  filterProducts(category: string): void {
    this.activeCategory = category;
    if (category.toLowerCase() === 'all') {
      this.products = [...this.originalProducts];
    } else {
      this.products = this.originalProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase());
    }
  }

  trackByFn(index: number, item: any): string {
    return item.name; // Substitua 'name' pela propriedade única do produto
  }
}
