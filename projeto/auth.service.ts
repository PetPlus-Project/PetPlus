// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  signup(username: string, email: string, cpf: string, dob: string, phone: string, password: string, confirmPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { username, email, cpf, dob, phone, password, confirmPassword }, { responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    // Aqui você pode adicionar lógica para lidar com o erro, como exibir uma mensagem ao usuário.
    console.error('Ocorreu um erro:', error);
    return throwError('Erro ao processar a solicitação. Por favor, tente novamente.');
  }
}