// header.component.ts

import { Component } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private carrinhoService: CarrinhoService) {}

  abrirCarrinho() {
    this.carrinhoService.abrirCarrinho();
  }
}
