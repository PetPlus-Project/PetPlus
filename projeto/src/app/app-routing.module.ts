import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/view/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'cadastro', component: CadastroComponent},
{path: 'login', component: LoginComponent},
{path: 'produtos', component: ProdutosComponent},
{path: 'pagamento', component: PagamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
