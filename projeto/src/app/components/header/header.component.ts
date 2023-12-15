import { Component } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public carrinhoService: CarrinhoService) { }

  abrirFecharCarrinho() {
    this.carrinhoService.toggleCarrinho();
  }

}
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon: HTMLElement | null = document.getElementById('menu-icon');
  const navbar: HTMLElement | null = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('open');
    });
  }
});