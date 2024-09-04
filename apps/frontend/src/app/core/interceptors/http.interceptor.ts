import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const apiService = inject(ApiService);
  const token = apiService.getToken();

  const authReq = token ? req.clone({
    setHeaders: {
      Authorization: token
    }
  }) : req;

  return next(authReq);
};