import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // URL base
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  // Método para definir o token
  setToken(token: string): void {
    this.token = `Bearer ${token}`; // Armazena o token no formato 'Bearer TOKEN'
  }

  // Método para obter o token
  getToken(): string | null {
    return this.token; // Retorna o token armazenado
  }

  // Métodos para consumir a API
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories`);
  }
}