import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private products: any[] = [
    { name: 'Ração Golden', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao1.webp', preco: 89.99 },
    { name: 'Ração Smash', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao2.png', preco: 79.99 },
    { name: 'Refeição Natural', category: 'racao', image: 'assets/img/imgcards/racao.jpg', preco: 149.99 },
    { name: 'Peitoral Fersplat', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/peitoralfersplat.jpg', preco: 49.99 },
    { name: 'Porta Ração Azul', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/portaracaoazul.jpg', preco: 29.99 },
    { name: 'Petiscos', category: 'racao', image: 'assets/img/imgcards/petiscos.jpg', preco: 19.99 },
    { name: 'Ração Premium', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racao3.webp', preco: 109.99 },
    { name: 'Ração Mandaí', category: 'racao', image: 'assets/img/imgcards/racaogato.png', preco: 89.99 },
    { name: 'Alien', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/alien2.jpg', preco: 39.99 },
    { name: 'Bicho Preguiça', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/bichopreguiça.jpg', preco: 29.99 },
    { name: 'Bolinha Crocante', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/bolinhacrocante.jpg', preco: 12.99 },
    { name: 'Cookie Golden', category: 'racao', image: 'assets/img/imgcards/imgCardCachorro/racaocachorro2.jpg', preco: 15.99 },
    { name: 'Ração Royal', category: 'racao', image: 'assets/img/imgcards/imgCardCachorro/racaocachorro3.jpg', preco: 119.99 },
    { name: 'Petisco Snack', category: 'racao', image: 'assets/img/imgcards/imgCardCachorro/acessorio2.jpg', preco: 9.99 },
    { name: 'Biscoito Pedigree', category: 'racao', image: 'assets/img/imgcards/imgCardCachorro/acessorio3.jpg', preco: 8.99 },
    { name: 'Ração Premier', category: 'racao', image: 'assets/img/imgcards/imgCardGato/racaogato1.jpg', preco: 99.99 },
    { name: 'Capivara', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/capivara.jpg', preco: 49.99 },
    { name: 'Louro', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/louro.jpg', preco: 29.99 },
    { name: 'Macaco', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/macaco.jpg', preco: 19.99 },
    { name: 'Porco', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/porco.jpg', preco: 39.99 },
    { name: 'Coleira Rosa', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/coleirarosa.jpg', preco: 19.99 },
    { name: 'Capa para Cama', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/capaparacama.jpg', preco: 69.99 },
    { name: 'Bola para Brincar', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/brinquedo1.png', preco: 9.99 },
    { name: 'Golden Gourmet', category: 'racao', image: 'assets/img/imgcards/imgCardGato/racaogato2.jpg', preco: 79.99 },
    { name: 'Atum Royal', category: 'racao', image: 'assets/img/imgcards/imgCardGato/racaogato3.jpg', preco: 89.99 },
    { name: 'Whiskas Salmão', category: 'racao', image: 'assets/img/imgcards/imgCardGato/racaogato4.jpg', preco: 59.99 },
    { name: 'Osso de Pelúcia', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/brinquedo2.png', preco: 15.99 },
    { name: 'Tucano', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/tucano.jpg', preco: 24.99 },
    { name: 'Golden Duii', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/racaogolden2.jpg', preco: 129.99 },
    { name: 'Royal Canin', category: 'racao', image: 'assets/img/imgProdutos/imgRacao/royalcanin.jpg', preco: 149.99 },
    { name: 'Caixa de Transporte Preta', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/caixatransportepreta.jpg', preco: 79.99 },
    { name: 'Coelho', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/coelho.jpg', preco: 19.99 },
    { name: 'Polvo', category: 'brinquedos', image: 'assets/img/imgProdutos/imgBrinquedos/polvo.jpg', preco: 29.99 },
    { name: 'Caixa de Transporte Rosa', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/caixatransporterosa.jpg', preco: 69.99 },
    { name: 'Cama Fersplat', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/camafersplat.jpg', preco: 89.99 },
    { name: 'Cama Lisa', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/camalisa.jpg', preco: 59.99 },
    { name: 'Coleira Azeedog', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/coleirazeedo.jpg', preco: 29.99 },
    { name: 'Peitoral', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/peitoral.jpg', preco: 49.99 },
    { name: 'Peitoral Zeedog', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/peitoralzeedog.jpg', preco: 69.99 },
    { name: 'Porta Ração Preto', category: 'acessorios', image: 'assets/img/imgProdutos/imgAcessorios/portaracao.jpg', preco: 39.99 },
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
