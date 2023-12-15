// home components ts

import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { PagamentoService } from '../../services/pagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  carrinhoItens: any[] = [];
  total: number = 0;
  carrinhoAberto: boolean = false;

  produtos: any[] = [
    { nome: 'Ração Premiatta', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com a Ração Premiatta, uma escolha premium para nutrição completa e equilibrada', preco: 263.99, parcelas: 'ou 3x de R$ 87.99', imagem: 'assets/img/imgcards/racaopremiata.jpg' },
    { nome: 'Refeição Natural Zee.Dog Kitchen', descricao: 'Proporcione uma experiência culinária excepcional para o seu animal de estimação com a Refeição Natural, uma opção nutritiva e deliciosa que combina o sabor irresistível com benefícios para a saúde', preco: 32.99, parcelas: 'ou 2x de R$ 16.50', imagem: 'assets/img/imgcards/racao.jpg' },
    { nome: 'Perfume Pet Clean', descricao: 'Transforme o cuidado do seu pet em uma experiência luxuosa com o Perfume Pet Clean, uma fragrância especialmente formulada para envolver seu animal de estimação em uma aura de frescor e limpeza.', preco: 19.99, parcelas: 'ou 2x de R$ 10.00', imagem: 'assets/img/imgcards/perfume.jpg' },
    { nome: 'Ração Mandaí cat', descricao: 'Proporcione ao seu felino uma experiência gastronômica excepcional com a Ração Mandaí Cat, uma fórmula cuidadosamente elaborada para atender às necessidades nutricionais específicas dos gatos.', preco: 44.99, parcelas: 'ou 2x de R$ 22.50', imagem: 'assets/img/imgcards/racaogato.png' },
    { nome: 'Vermífugo Drontal Gatos', descricao: 'Mantenha seu felino protegido e saudável com o Vermífugo Drontal para Gatos, uma solução eficaz e confiável para o controle de vermes intestinais.', preco: 54.99, parcelas: 'ou 2x de R$ 27.50', imagem: 'assets/img/imgcards/remediogato.jpg' },
    { nome: 'Brinquedo para Gatos e Cachorros', descricao: 'Explore o mundo do entretenimento animal com nossos Brinquedos para Cachorros e Gatos, uma coleção cuidadosamente selecionada para manter seus amigos peludos entretidos e felizes.', preco: 32.99, parcelas: 'ou 2x de R$ 16.00', imagem: 'assets/img/imgcards/brinquedo.png' },
    { nome: 'Casa para Gato', descricao: 'Proporcione ao seu felino um refúgio acolhedor e encantador com a Casinha para Gatos, o lugar perfeito para descanso e relaxamento.', preco: 485.99, parcelas: 'ou 4x de R$ 121.50', imagem: 'assets/img/imgcards/casagato.jpg' },
    { nome: 'Casa para Cachorro', descricao: 'Ofereça ao seu fiel companheiro um lar dentro do lar com a Casinha para Cachorros, um refúgio aconchegante e seguro que atende às necessidades do seu amigo peludo.', preco: 350.99, parcelas: 'ou 4x de R$ 87.75', imagem: 'assets/img/imgcards/casacachorro.jpg' },
    { nome: 'Petiscos para seu animal', descricao: 'Delicie seus amigos peludos com nossos irresistíveis Petiscos para Gatos e Cachorros, uma seleção de agrados saborosos e saudáveis que farão a alegria dos seus animais de estimação.', preco: 12.99, parcelas: 'ou 2x de R$ 6.50', imagem: 'assets/img/imgcards/petiscos.jpg' },
    // favorito dos cachorros
    { nome: 'Ração Golden', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com a Ração Golden, uma escolha premium para nutrição completa e equilibrada', preco: 287.99, parcelas: 'ou 3x de R$ 95.99', imagem: 'assets/img/imgcards/imgCardCachorro/racaocachorro1.jpg' },
    { nome: 'Cookie Golden', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com a nova linha Cookie Golden, uma escolha premium para nutrição completa e equilibrada', preco: 328.99, parcelas: 'ou 3x de R$ 109.66', imagem: 'assets/img/imgcards/imgCardCachorro/racaocachorro2.jpg' },
    { nome: 'Ração Royal', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com a nova linha Royal Canin, uma escolha premium para nutrição completa e equilibrada', preco: 311.99, parcelas: 'ou 3x de R$ 103.99', imagem: 'assets/img/imgcards/imgCardCachorro/racaocachorro3.jpg' },
    { nome: 'Galinha de Pelúcia', descricao: 'Explore o mundo do entretenimento animal com nossos Brinquedos para Cachorros, desta vez uma galinha de pelúcia com uma coleção cuidadosamente selecionada para manter seus amigos peludos entretidos e felizes.', preco: 31.99, parcelas: 'ou 3x de R$ 10.66', imagem: 'assets/img/imgcards/imgCardCachorro/brinquedocachorro1.jpg' },
    { nome: 'Ossos de Brinquedo', descricao: 'Explore o mundo do entretenimento animal com nossos Brinquedos para Cachorros, desta vez um osso de brinquedo junto de uma corda com uma coleção cuidadosamente selecionada para manter seus amigos peludos entretidos e felizes.', preco: 18.99, parcelas: 'ou 2x de R$ 9.50', imagem: 'assets/img/imgcards/imgCardCachorro/brinquedocachorro2.jpg' },
    { nome: 'Bolinhas Pontiagudas', descricao: 'Explore o mundo do entretenimento animal com nossos Brinquedos para Cachorros, desta vez com bolinhas pontiagudas e com uma coleção cuidadosamente selecionada para manter seus amigos peludos entretidos e felizes.', preco: 9.99, parcelas: 'sem forma de parcelamento', imagem: 'assets/img/imgcards/imgCardCachorro/brinquedocachorro3.jpg' },
    { nome: 'Tapete Higiênico', descricao: 'Ofereça ao seu fiel companheiro um lar dentro do lar com nosso Tapete Higiênico, um refúgio aconchegante e seguro que atende às necessidades do seu amigo peludo.', preco: 59.99, parcelas: 'ou 3x de R$ 19.99', imagem: 'assets/img/imgcards/imgCardCachorro/acessorio1.jpg' },
    { nome: 'Petisco Snack', descricao: 'Ofereça ao seu fiel companheiro uma boa refeição dentro do seu lar com nosso Petisco Snack Blue, um petisco crocante e saboroso que atende às necessidades do seu amigo peludo.', preco: 31.99, parcelas: 'ou 2x de R$ 15.99', imagem: 'assets/img/imgcards/imgCardCachorro/acessorio2.jpg' },
    { nome: 'Biscoito Pedigree', descricao: 'Ofereça ao seu fiel companheiro uma boa refeição dentro do seu lar com nosso Biscoito Pedigree, um biscoito crocante e saboroso que atende às necessidades do seu amigo peludo.', preco: 34.99, parcelas: 'ou 2x de R$ 17.99', imagem: 'assets/img/imgcards/imgCardCachorro/acessorio3.jpg' },
    // favorito dos gatos
    { nome: 'Ração Premier', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com a Ração Premier, uma escolha premium para nutrição completa e equilibrada', preco: 289.99, parcelas: 'ou 3x de R$ 96.66', imagem: 'assets/img/imgcards/imgCardGato/racaogato1.jpg' },
    { nome: 'Golden Gourmet', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com a Ração Golden Gourmet, uma escolha premium para nutrição completa e equilibrada', preco: 311.99, parcelas: 'ou 3x de R$ 103.99', imagem: 'assets/img/imgcards/imgCardGato/racaogato2.jpg' },
    { nome: 'Atum Royal', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com o Atum Royal Canin, uma escolha premium para nutrição completa e equilibrada', preco: 211.99, parcelas: 'ou 2x de R$ 105.99', imagem: 'assets/img/imgcards/imgCardGato/racaogato3.jpg' },
    { nome: 'Whiskas Salmão', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com a Whiskas Salmão, uma escolha premium para nutrição completa e equilibrada', preco: 241.99, parcelas: 'ou 3x de R$ 80.66', imagem: 'assets/img/imgcards/imgCardGato/racaogato4.jpg' },
    { nome: 'Antipulgas', descricao: 'Mantenha seu felino protegido e saudável com o nosso Antipulgas para Gatos, uma solução eficaz e confiável para o controle da pele do seu felino.', preco: 54.99, parcelas: 'ou 2x de R$ 27.50', imagem: 'assets/img/imgcards/imgCardGato/brinquedogato1.jpg'},
    { nome: 'Casinha Aconchegante', descricao: 'Proporcione ao seu felino um refúgio acolhedor e encantador com nossa Casinha de Papelão Reciclável, o lugar perfeito para descanso e relaxamento.', preco: 322.99, parcelas: 'ou 3x de R$ 107.66', imagem: 'assets/img/imgcards/imgCardGato/brinquedogato3.jpg' },
    { nome: 'Bolinha Tapete', descricao: 'Explore o mundo do entretenimento animal com nossos Brinquedos para Gatos, uma coleção cuidadosamente selecionada para manter felino entretido e feliz.', preco: 111.99, parcelas: 'ou 2x de R$ 55.99', imagem: 'assets/img/imgcards/imgCardGato/brinquedogato2.jpg' },
    { nome: 'Macaco de Pelúcia', descricao: 'Explore o mundo do entretenimento animal com nossos Brinquedos para Gatos, desta vez um macaco de pelúcia com uma coleção cuidadosamente selecionada para manter seus amigo felino entretido e feliz.', preco: 31.99, parcelas: 'ou 3x de R$ 10.66', imagem: 'assets/img/imgcards/imgCardGato/macaco.jpg' },
    { nome: 'Bolinha Pontiaguda', descricao: 'Explore o mundo do entretenimento animal com nossos Brinquedos para Gatos, desta vez uma bolinha pontiaguda com uma coleção cuidadosamente selecionada para manter seus amigo felino entretido e feliz.', preco: 21.99, parcelas: 'ou 2x de R$ 10.99', imagem: 'assets/img/imgcards/imgCardGato/acessorio1.jpg' },
    // produtos em promoção
    { nome: 'Antipulgas Simparic', descricao: 'Mantenha seu animal protegido e saudável com o nosso Antipulgas, uma solução eficaz e confiável para o controle da pele do seu pet.', preco: 29.99, parcelas: 'ou 2x de R$ 14.99'},
    { nome: 'Vermífugo Milbemax', descricao: 'Mantenha seu pet protegido e saudável com o Vermífugo Milbemax, uma solução eficaz e confiável para o controle de vermes intestinais.', preco: 31.99, parcelas: 'ou 2x de R$ 15.99'},
    { nome: 'Desinfetante (1L)', descricao: 'Mantenha seu animal protegido e saudável com o nosso Desinfetante de 1 Litro, uma solução eficaz e confiável para o controle de pulgas ou insetos na pele do seu pet.', preco: 51.99, parcelas: 'ou 2x de R$ 25.99'},
    { nome: 'Caixa de Transporte', descricao: 'Ofereça ao seu animal querido um transporte confortável para suas viagens com a nossa Caixa de Transporte, um refúgio aconchegante e seguro que atende às necessidades do seu querido pet.', preco: 350.99, parcelas: 'ou 4x de R$ 87,75'},
  { nome: 'Coleira', descricao: 'Ofereça ao seu fiel companheiro uma confortável coleira com material ultrarresistente e macio de primeira linha, uma coleira eficaz e segura que atende às necessidades do seu animalzinho.', preco: 49.99, parcelas: 'ou 2x de R$ 25,00'},
  { nome: 'Creme Hidrapet', descricao: 'Deixe o seu animal extremamente cheiroso e hidratado com o nosso Creme Hidrapet, um creme cheiroso e seguro que atende às necessidades do seu animalzinho.', preco: 59.99, parcelas: 'ou 2x de R$ 30,00'},
  { nome: 'Condicionador Hidrapet', descricao: 'Deixe o seu animal extremamente cheiroso e hidratado com o nosso Condicionador Hidrapet, um condicionador cheiroso e duradouro que atende às necessidades do seu animalzinho.', preco: 69.99, parcelas: 'ou 2x de R$ 35,00'},
  { nome: 'Crocodilo de Pelúcia', descricao: 'Explore o mundo do entretenimento animal com nossos brinquedos personalizados, desta vez com um Crocodilo de Pelúcia com uma coleção cuidadosamente selecionada para manter seus animais entretidos e felizes.', preco: 31.99, parcelas: 'ou 3x de R$ 10,66'},
  { nome: 'Suplemento Avert', descricao: 'Cuide da saúde e bem-estar do seu fiel companheiro com o Suplemento Avert, uma escolha premium para nutrição completa e equilibrada', preco: 289.99, parcelas: 'ou 3x de R$ 96,66'},
  // animais com deficiência
  { nome: 'Andador para Animais', descricao: 'Dê ao seu melhor amigo de quatro patas a liberdade de se movimentar com o Andador "PawsUp". Leve, ajustável e fácil de usar, este andador proporciona conforto e estabilidade para animais com deficiências nas patas traseiras. Deixe seu pet explorar o mundo com alegria renovada!', preco: 119.99, parcelas: 'ou 2x de R$ 60,00'},
  { nome: 'Cadeira de Rodas - Patas Traseiras', descricao: 'Cadeira de Rodas para Animais "RollPaws". Esta cadeira inovadora é projetada para animais com deficiências nas patas traseiras, oferecendo conforto, ajustabilidade e a liberdade para explorar o mundo com alegria renovada.', preco: 199.99, parcelas: 'ou 3x de R$ 66,66'},
  { nome: 'Bandagens para Patas Danificadas', descricao: 'Auxilie na recuperação do seu pet com as Bandagens "HealPaws". Projetadas para patas danificadas, oferecem suporte e conforto durante o processo de cura. Leves e ajustáveis, permitem que seu animal se mova com facilidade.', preco: 87.99, parcelas: 'ou 2x de R$ 44,00'},
  { nome: 'Cama Ortopédica', descricao: 'Proporcione o descanso ideal para seu pet com a Cama Ortopédica "OrthoPaws". Projetada para oferecer suporte a animais com necessidades ortopédicas, esta cama proporciona conforto excepcional e alívio da pressão.', preco: 201.99, parcelas: 'ou 3x de R$ 67,33'},
  { nome: 'Protetor de Membros', descricao: 'Mantenha as patas do seu pet seguras e protegidas com o Protetor de Membros "SafePaws". Desenvolvido para proporcionar conforto e evitar lesões, este protetor é ideal para animais com patas sensíveis ou em processo de recuperação.', preco: 143.99, parcelas: 'ou 2x de R$ 72,00'},
  { nome: 'Escada para Auxílio', descricao: 'Facilite o acesso a lugares elevados para o seu pet com a Escada com Auxílio "StepUpPaws". Projetada para animais de estimação com mobilidade reduzida, esta escada oferece uma solução prática e segura.', preco: 54.99, parcelas: 'ou 2x de R$ 28,00'},
  { nome: 'Tala para Patas', descricao: 'Proporcione suporte e estabilidade às patas do seu pet com a Tala "FlexPaws". Desenvolvida para auxiliar na recuperação de lesões ou no tratamento de condições ortopédicas, esta tala oferece conforto e proteção durante o processo de cura.', preco: 41.99, parcelas: 'ou 2x de R$ 21,00'},
  { nome: 'Cadeira de Rodas', descricao: 'Cadeira de Rodas para Animais "RollPaws". Esta cadeira inovadora é projetada para animais com deficiências nas patas traseiras, oferecendo conforto, ajustabilidade e a liberdade para explorar o mundo com alegria renovada.', preco: 199.99, parcelas: 'ou 3x de R$ 66,66'},
  { nome: 'Cama Ortopédica Meau', descricao: 'Proporcione o descanso ideal para seu pet com a Cama Ortopédica "Meau". Projetada para oferecer suporte a animais com necessidades ortopédicas, esta cama proporciona conforto excepcional e alívio da pressão.', preco: 201.99, parcelas: 'ou 3x de R$ 67,33'}
  ];

  constructor(
    private carrinhoService: CarrinhoService,
    private pagamentoService: PagamentoService,
    private router: Router
  ) {
    this.carrinhoService.carrinhoItems$.subscribe(items => {
      this.carrinhoItens = items;
      this.atualizarTotal();
    });

    this.carrinhoService.carrinhoAberto$.subscribe(aberto => {
      this.carrinhoAberto = aberto;
    });
  }

  abrirCarrinho() {
    this.carrinhoService.toggleCarrinho();
  }

  adicionarProdutoAoCarrinho(produto: any) {
    this.carrinhoService.adicionarProdutoAoCarrinho(produto);
}

  fecharCarrinho() {
    this.carrinhoService.toggleCarrinho();
  }

  finalizarCompra() {
    const produtosNoCarrinho = this.carrinhoItens.slice(); // Cria uma cópia dos itens no carrinho
    this.pagamentoService.setProdutosNoCarrinho(produtosNoCarrinho);
    this.router.navigate(['/pagamento']);
  }

  private atualizarTotal() {
    this.total = this.carrinhoItens.reduce((acc, item) => acc + item.preco, 0);
  }

  removerDoCarrinho(index: number) {
    this.carrinhoService.removerDoCarrinho(index);
  }
}
