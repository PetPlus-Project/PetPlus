import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private products: any[] = [
    { name: 'Ração Golden', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao1.webp' },
    { name: 'Ração Smash', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao2.png' },
    { name: 'Ração Premium', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao3.webp' },
    { name: 'Ração Pobre', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao4.webp' },
    { name: 'Brinde Pet', category: 'brindes', image: 'assets/img/imgProdutos/imgBrindes/brinde1.webp' },
    { name: 'Brinde Gato', category: 'brindes', image: 'assets/img/imgProdutos/imgBrindes/brinde2.webp' },
    { name: 'Brinquedo para Cachorro', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/brinquedo1.png' },
    { name: 'Brinquedo para Gato', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/brinquedo2.png' },
  ];

  getAllProducts(): Observable<any[]> {
    return of(this.products);
  }

  getFilteredProducts(category: string): Observable<any[]> {
    if (category.toLowerCase() === 'all') {
      return of(this.products);
    } else {
      const filteredProducts = this.products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      return of(filteredProducts);
    }
  }
}
