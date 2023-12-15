// pagamento.component.ts

import { Component, OnInit } from '@angular/core';
import { PagamentoService } from '../services/pagamento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css'],
})
export class PagamentoComponent implements OnInit {
  produtosNoCarrinho: any[] = [];

  constructor(private pagamentoService: PagamentoService) {}

  ngOnInit() {
    this.produtosNoCarrinho = this.pagamentoService.getProdutosNoCarrinho();
  }

  // Adicione lógica relacionada ao pagamento, se necessário
}
