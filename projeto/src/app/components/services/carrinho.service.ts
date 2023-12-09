// carrinho.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinhoItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  carrinhoItems$: Observable<any[]> = this.carrinhoItemsSubject.asObservable();

  adicionarAoCarrinho(item: any) {
    const carrinhoAtual = this.carrinhoItemsSubject.value;
    const novoCarrinho = [...carrinhoAtual, item];
    this.carrinhoItemsSubject.next(novoCarrinho);
  }

  removerDoCarrinho(index: number) {
    const carrinhoAtual = this.carrinhoItemsSubject.value;
    const novoCarrinho = carrinhoAtual.filter((item, i) => i !== index);
    this.carrinhoItemsSubject.next(novoCarrinho);
  }
}
