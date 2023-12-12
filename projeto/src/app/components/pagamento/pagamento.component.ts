import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {
  dadosCartao = {
    numero: '',
    nome: '',
    validade: '',
    codigoSeguranca: ''
  };

  processarPagamento() {
    // Aqui você pode implementar a lógica de processamento do pagamento
    console.log('Processando pagamento:', this.dadosCartao);
  }
}
