// login.component.ts
import { Component } from '@angular/core';
import { LoginService } from 'login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensagemErro: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login(): void {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login bem-sucedido:', response);
        // Exibe mensagem de sucesso
        this.mensagemErro = 'Login efetuado com sucesso';

        // Redireciona para a página desejada após o login
        this.router.navigate(['']); // Substitua '/dashboard' pela rota desejada
      },
      (error) => {
        console.error('Erro ao fazer login', error);
        // Exibe mensagem de erro
        this.mensagemErro = 'Email ou senha incorretos';
      }
    );
  }
}