// carrinho.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinhoItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  carrinhoItems$: Observable<any[]> = this.carrinhoItemsSubject.asObservable();

  private carrinhoAbertoSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  carrinhoAberto$: Observable<boolean> = this.carrinhoAbertoSubject.asObservable();

  toggleCarrinho() {
    this.carrinhoAbertoSubject.next(!this.carrinhoAbertoSubject.value);
  }

  abrirCarrinho() {
    this.carrinhoAbertoSubject.next(true);
  }

  adicionarProdutoAoCarrinho(produto: any) {
    const carrinhoAtual = this.carrinhoItemsSubject.value;
    const novoCarrinho = [...carrinhoAtual, produto];
    this.carrinhoItemsSubject.next(novoCarrinho);
    this.toggleCarrinho(); // Fecha o carrinho automaticamente
  }

  removerDoCarrinho(index: number) {
    const carrinhoAtual = this.carrinhoItemsSubject.value;
    const novoCarrinho = carrinhoAtual.filter((item, i) => i !== index);
    this.carrinhoItemsSubject.next(novoCarrinho);
  }
}
