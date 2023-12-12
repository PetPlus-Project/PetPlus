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
  mensagemErro: string = ''; // Adicione esta linha

  constructor(private loginService: LoginService, private router: Router) {}

  login(): void {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login bem-sucedido:', response);
        // Adicione aqui uma lógica para exibir a mensagem de sucesso ao usuário

        // Redireciona para a página desejada após o login
        this.router.navigate(['/dashboard']); // Substitua '/dashboard' pela rota desejada
      },
      (error) => {
        console.error('Erro ao fazer login', error);
        // Adicione aqui uma lógica para exibir a mensagem de erro ao usuário
      }
    );
  }
}
