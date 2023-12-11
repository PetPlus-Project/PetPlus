import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  public filteredProductsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  filteredProducts$: Observable<any[]> = this.filteredProductsSubject.asObservable();

  constructor() {
    this.filterProducts('all'); // Inicializa os produtos filtrados com todos ao criar o serviço
  }

  filterProducts(category: string): void {
    if (category.toLowerCase() === 'all') {
      this.filteredProductsSubject.next(this.products);
    } else {
      const filteredProducts = this.products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
      this.filteredProductsSubject.next(filteredProducts);
    }
  }
}
