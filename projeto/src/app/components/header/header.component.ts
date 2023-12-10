// header.component.ts

import { Component } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public carrinhoService: CarrinhoService) {}

  abrirFecharCarrinho() {
    this.carrinhoService.toggleCarrinho();
  }
}
