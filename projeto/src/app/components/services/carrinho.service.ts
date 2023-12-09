// carrinho.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinhoItems = new BehaviorSubject<any[]>([]);
  carrinhoItems$ = this.carrinhoItems.asObservable();

  adicionarAoCarrinho(produto: any) {
    const itensAtuais = this.carrinhoItems.value;
    this.carrinhoItems.next([...itensAtuais, produto]);
  }

  limparCarrinho() {
    this.carrinhoItems.next([]);
  }
}
