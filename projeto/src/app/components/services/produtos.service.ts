import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  // Torne a propriedade 'products' pública
  public products: any[] = [
    { name: 'Ração Golden', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao1.webp' },
    { name: 'Ração Smash', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao2.png' },
    { name: 'Ração Premium', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao3.webp' },
    { name: 'Ração Pobre', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao4.webp' },
  ];

  public filteredProductsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.products);
  filteredProducts$: Observable<any[]> = this.filteredProductsSubject.asObservable();

  filterProducts(category: string): void {
    if (category.toLowerCase() === 'all') {
      this.filteredProductsSubject.next(this.products);
    } else {
      const filteredProducts = this.products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      this.filteredProductsSubject.next(filteredProducts);
    }
  }
}
