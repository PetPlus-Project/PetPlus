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
export class HomeComponent implements OnInit{
  carrinhoItens: any[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}
  
  ngOnInit() {
    // Inscreva-se no Observable para receber atualizações do carrinho
    this.carrinhoService.carrinhoItems$.subscribe(items => {
      this.carrinhoItens = items;
      // this.atualizarTotal();
    });
  }

  adicionarAoCarrinho() {
    const produto = {
      nome: 'Ração Premiatta',
      preco: 'R$ 263,99',
      parcelas: 'ou 3x de R$ 88,00'
      // Adicione mais detalhes do produto, se necessário
    };
    this.carrinhoService.adicionarAoCarrinho(produto);
    // this.atualizarTotal();
  }
  finalizarCompra() {
    // Lógica para finalizar a compra
  }
  private atualizarTotal() {
    // this.total = this.carrinhoItens.reduce((acc, item) => acc + item.preco, 0);
  }
  // ImageCard1: string;
  // ImageMarca1: string;
  // ImageMarca2: string;
  // ImageMarca3: string;
  // ImageMarca4: string;
  // ImageMarca5: string;
  // ImageMarca6: string;
  // ImageMarca7: string;

  // ImageCarrossel1: string;
  // ImageCarrossel2: string;
  // ImageCarrossel3: string;

  // constructor() {
     //image location
    //  this.ImageCard1 = '/components/imgs/imgCards/card1.png'
    //  this.ImageMarca1 = '/assets/img/imgMarcas/marca1.jpg'
    //  this.ImageMarca2 = '/assets/img/imgMarcas/marca2.jpg'
    //  this.ImageMarca3 = '/assets/img/imgMarcas/marca3.jpg'
    //  this.ImageMarca4 = '/assets/img/imgMarcas/marca4.jpg'
    //  this.ImageMarca5 = '/assets/img/imgMarcas/marca5.jpg'
    //  this.ImageMarca6 = '/assets/img/imgMarcas/marca6.jpg'
    //  this.ImageMarca7 = '/assets/img/imgMarcas/marca7.jpg'
    //  this.ImageCarrossel1 = '/assets/img/imgCarrossel/image1.jpg'
    //  this.ImageCarrossel2 = '/assets/img/imgCarrossel/image2.gif'
    //  this.ImageCarrossel3 = '/assets/img/imgCarrossel/image3.jpg'
  // }
}
