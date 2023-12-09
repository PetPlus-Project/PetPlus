import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-home',
//   templateUrl: `
//   <div class="card">
//     <img class="img-fluid" style="max-width: 50%; height: auto;" src="assets/img/imgcards/racaopremiata.jpg" alt="">
//     <div class="card-body d-flex flex-column justify-content-between">
//       <h4 class="card-title">Ração Premiatta</h4>
//       <p class="card-text">Cuide da saúde e bem-estar do seu fiel companheiro com a Ração Premiatta, uma escolha premium para nutrição completa e equilibrada.</p>
//       <button class="price-cards" (click)="adicionarAoCarrinho()">
//         <h4>R$ 263,99</h4>
//         <p>ou 3x de R$ 88,00</p>
//       </button>
//     </div>
//   </div>
//   <app-carrinho></app-carrinho>
// `,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  carrinhoItens: any[] = [];
  total: number = 0;
  carrinhoAberto: boolean = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.carrinhoService.carrinhoItems$.subscribe(items => {
      this.carrinhoItens = items;
      this.atualizarTotal();
    });
  }

  adicionarAoCarrinho() {
    const produto = {
      nome: 'Ração Premiatta',
      preco: 263.99,
      parcelas: 'ou 3x de R$ 88,00'
      // Adicione mais detalhes do produto, se necessário
    };
    this.carrinhoService.adicionarAoCarrinho(produto);
    this.abrirCarrinho(); // Abre o carrinho ao adicionar um item
  }

  finalizarCompra() {
    // Lógica para finalizar a compra
  }

  toggleCarrinho() {
    this.carrinhoAberto = !this.carrinhoAberto;
  }

  abrirCarrinho() {
    this.carrinhoAberto = true;
  }

  fecharCarrinho() {
    this.carrinhoAberto = false;
  }

  private atualizarTotal() {
    this.total = this.carrinhoItens.reduce((acc, item) => acc + item.preco, 0);
  }

  removerDoCarrinho(index: number) {
    this.carrinhoService.removerDoCarrinho(index);
  }
}
