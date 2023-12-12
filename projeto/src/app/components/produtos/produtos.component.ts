import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [CarrinhoService]
})
export class ProdutosComponent implements OnInit {
   // Variáveis para a filtragem de cards
   activeCategory: string = 'all';
   originalProducts: any[] = [];
   products: any[] = [];
 
   // Variáveis para o carrinho de compras
   carrinhoItens: any[] = [];
   total: number = 0;
   carrinhoAberto: boolean = false;
 
   constructor(public productService: ProdutosService, public carrinhoService: CarrinhoService) {}
 
   ngOnInit(): void {
     this.loadProducts();
     this.setupCarrinhoService();
   }
 
   // Método para carregar os produtos
   loadProducts(): void {
     this.productService.getAllProducts().subscribe((allProducts) => {
       this.originalProducts = allProducts;
       this.filterProducts('all'); // Filtrar produtos ao carregar a página
     });
   }
 
   // Método para configurar o serviço do carrinho
   setupCarrinhoService(): void {
     this.carrinhoService.carrinhoItems$.subscribe(items => {
       this.carrinhoItens = items;
       this.atualizarTotal();
     });
 
     this.carrinhoService.carrinhoAberto$.subscribe(aberto => {
       this.carrinhoAberto = aberto;
     });
   }
 
   // Método para filtrar os produtos
   filterProducts(category: string): void {
     this.activeCategory = category;
     if (category.toLowerCase() === 'all') {
       this.products = [...this.originalProducts];
     } else {
       this.products = this.originalProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase());
     }
   }
 
   // Métodos relacionados ao carrinho de compras
   abrirCarrinho() {
     this.carrinhoService.toggleCarrinho();
   }
 
   adicionarProdutoAoCarrinho(produto: any) {
     this.carrinhoService.adicionarProdutoAoCarrinho(produto);
   }
 
   fecharCarrinho() {
     this.carrinhoService.toggleCarrinho();
   }
 
   finalizarCompra() {
     // Lógica para finalizar a compra
   }
 
   private atualizarTotal() {
     this.total = this.carrinhoItens.reduce((acc, item) => acc + item.preco, 0);
   }
 
   removerDoCarrinho(index: number) {
     this.carrinhoService.removerDoCarrinho(index);
   }
   trackByFn(index: number, item: any): string {
    return item.name; // Substitua 'name' pela propriedade única do produto
  }
}
