import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service'; // Ajuste o caminho conforme necessário
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const apiService = inject(ApiService); // Obtém o ApiService
  const token = apiService.getToken(); // Obtém o token armazenado

  // Se houver um token, clona a requisição e adiciona o cabeçalho Authorization
  const authReq = token ? req.clone({
    setHeaders: {
      Authorization: token
    }
  }) : req;

  return next(authReq);
};