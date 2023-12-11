// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/view/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CarrinhoService } from './components/services/carrinho.service';
import { PagamentoComponent } from './components/pagamento/pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    ProdutosComponent,
    PagamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Adicione o HttpClientModule aqui
    RouterModule.forRoot([])
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
