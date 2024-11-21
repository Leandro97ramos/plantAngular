import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
  
})
export class AuthService {
  //ruta api
  private apiUrl = '';
  constructor(private http: HttpClient) { }



  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Función para hacer login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Función para obtener el token del almacenamiento local (si existe)
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Función para almacenar el token en el almacenamiento local
  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  // Función para eliminar el token (logout)
  logout(): void {
    localStorage.removeItem('auth_token');
  }

  // Función para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token != null;
  }





}
