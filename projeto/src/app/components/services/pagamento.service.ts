// pagamento.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagamentoService {
  private produtosNoCarrinho: any[] = [];

  setProdutosNoCarrinho(produtos: any[]) {
    this.produtosNoCarrinho = produtos;
  }

  getProdutosNoCarrinho() {
    return this.produtosNoCarrinho;
  }

  // Adicione métodos relacionados ao pagamento, se necessário
}
