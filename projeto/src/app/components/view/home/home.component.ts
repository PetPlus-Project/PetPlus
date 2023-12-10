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

  produtos: any[] = [
    // Adicione todos os produtos aqui
    { nome: 'Ração Premiatta', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com a Ração Premiatta, uma escolha premium para nutrição completa e equilibrada', preco: 263.99, parcelas: 'ou 3x de R$ 88,00', imagem: 'assets/img/imgcards/racaopremiata.jpg' },
    { nome: 'Refeição Natural Zee.Dog Kitchen', descricao: 'Proporcione uma experiência culinária excepcional para o seu animal de estimação com a Refeição Natural, uma opção nutritiva e deliciosa que combina o sabor irresistível com benefícios para a saúde', preco: 32.99, parcelas: 'ou 2x de R$ 16,49', imagem: 'assets/img/imgcards/racao.jpg' },
    { nome: 'Perfume Pet Clean', descricao: 'Transforme o cuidado do seu pet em uma experiência luxuosa com o Perfume Pet Clean, uma fragrância especialmente formulada para envolver seu animal de estimação em uma aura de frescor e limpeza.', preco: 19.99, parcelas: 'ou 2x de R$ 9,99', imagem: 'assets/img/imgcards/perfume.jpg' }
    // Adicione outros produtos conforme necessário
  ];

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
}
