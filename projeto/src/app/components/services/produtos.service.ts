import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private products: any[] = [
    { name: 'Ração Golden', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao1.webp', preco: 199.99 },
    { name: 'Ração Smash', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao2.png', preco: 199.99 },
    { name: 'Refeição Natural', category: 'racao', image: 'assets/img/imgcards/racao.jpg', preco: 199.99 },
    { name: 'Brinde Pet', category: 'brindes', image: 'assets/img/imgProdutos/imgBrindes/brinde1.webp', preco: 199.99 },
    { name: 'Brinde Gato', category: 'brindes', image: 'assets/img/imgProdutos/imgBrindes/brinde2.webp', preco: 199.99 },
    { name: 'Petiscos', category: 'racao', image: 'assets/img/imgcards/petiscos.jpg', preco: 199.99 },
    { name: 'Ração Premium', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao3.webp', preco: 199.99 },
    { name: 'Ração Mandaí', category: 'racao', image: 'assets/img/imgcards/racaogato.png', preco: 199.99 },
    { name: 'Cookie Golden', category: 'racao', image: 'assets/img/imgcards/imgCardCachorro/racaocachorro2.jpg', preco: 199.99 },
    { name: 'Ração Royal', category: 'racao', image: 'assets/img/imgcards/imgCardCachorro/racaocachorro3.jpg', preco: 199.99 },
    { name: 'Petisco Snack', category: 'racao', image: 'assets/img/imgcards/imgCardCachorro/acessorio2.jpg', preco: 199.99 },
    { name: 'Biscoito Pedigree', category: 'racao', image: 'assets/img/imgcards/imgCardCachorro/acessorio3.jpg', preco: 199.99 },
    { name: 'Golden Gourmet', category: 'racao', image: 'assets/img/imgcards/imgCardGato/racaogato2.jpg', preco: 199.99 },
    { name: 'Atum Royal', category: 'racao', image: 'assets/img/imgcards/imgCardGato/racaogato3.jpg', preco: 199.99 },
    { name: 'Whiskas Salmão', category: 'racao', image: 'assets/img/imgcards/imgCardGato/racaogato4.jpg', preco: 199.99 },
    { name: 'Ração Premier', category: 'racao', image: 'assets/img/imgcards/imgCardGato/racaogato1.jpg', preco: 199.99 },
    { name: 'Brinde Pet', category: 'brindes', image: 'assets/img/imgProdutos/imgBrindes/brinde1.webp', preco: 199.99 },
    { name: 'Brinde Gato', category: 'brindes', image: 'assets/img/imgProdutos/imgBrindes/brinde2.webp', preco: 199.99 },
    { name: 'Brinquedo para Cachorro', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/brinquedo1.png', preco: 199.99 },
    { name: 'Brinquedo para Gato', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/brinquedo2.png', preco: 199.99 },
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
