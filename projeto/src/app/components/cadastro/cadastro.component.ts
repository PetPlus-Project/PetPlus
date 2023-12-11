// cadastro.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'auth.service';  // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  username: string = '';
  email: string = '';
  cpf: string = '';
  dob: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  cadastrar(): void {
    console.log('Botão cadastrar pressionado!');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('CPF:', this.cpf);
    console.log('Data de Nascimento:', this.dob);
    console.log('Telefone:', this.phone);
    console.log('Password:', this.password);
    console.log('Confirmar Senha:', this.confirmPassword);

    // Verificar se a senha e a confirmação da senha correspondem
    if (this.password !== this.confirmPassword) {
      console.error('Senha e confirmação de senha não correspondem.');
      // Adicione aqui uma lógica para exibir a mensagem de erro ao usuário
      return;
    }

    // Restante do código para chamar o serviço de autenticação
    this.authService.signup(this.username, this.email, this.cpf, this.dob, this.phone, this.password)
      .subscribe(
        (response) => {
          console.log(response); // Deverá imprimir a mensagem de sucesso
          // Adicione aqui uma lógica para exibir a mensagem de sucesso ao usuário
          console.log('Botão cadastrar pressionado!');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('CPF:', this.cpf);
    console.log('Data de Nascimento:', this.dob);
    console.log('Telefone:', this.phone);
    console.log('Password:', this.password);
    console.log('Confirmar Senha:', this.confirmPassword);
        },
        (error) => {
          console.error('Erro ao cadastrar usuário', error);
          // Adicione aqui uma lógica para exibir a mensagem de erro ao usuário
        }
      );
  }
}
