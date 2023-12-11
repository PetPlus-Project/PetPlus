// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  signup(username: string, email: string, cpf: string, dob: string, phone: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { username, email, cpf, dob, phone, password }, { responseType: 'text' });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}
