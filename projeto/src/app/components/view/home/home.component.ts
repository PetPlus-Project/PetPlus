import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarrinhoService]
})
export class HomeComponent {
  carrinhoItens: any[] = [];
  total: number = 0;
  carrinhoAberto: boolean = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhoService.carrinhoItems$.subscribe(items => {
      this.carrinhoItens = items;
      this.atualizarTotal();
    });

    this.carrinhoService.carrinhoAberto$.subscribe(aberto => {
      this.carrinhoAberto = aberto;
    });
  }

  abrirCarrinho() {
    this.carrinhoService.toggleCarrinho();
  }
  produto = {
    nome: 'Ração Premiatta',
    preco: 263.99,
    parcelas: 'ou 3x de R$ 88,00',
  };

  adicionarProdutoAoCarrinho() {
    this.carrinhoService.adicionarProdutoAoCarrinho(this.produto);
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
}
