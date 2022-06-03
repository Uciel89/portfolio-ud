/*===/ Módulos /===*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/*==/ Modelos para la autenticación /==*/
import { JwtDTO } from '../../models/security_models/jwt-dto';
import { NuevoUsuario } from 'src/app/models/security_models/nuevo-usuario';
import { LoginUsuario } from 'src/app/models/security_models/login-usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) {}

  // Método para un nuevo usuario
  public nuevoUsuario(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(
      this.authUrl + 'nuevoUsuario',
      nuevoUsuario
    );
  }

  // Método para iniciar sesión
  public login(login: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<any>(this.authUrl + 'login', login);
  }

  // Método para verificar que estas logrado en la app
  public isLogged(): boolean {
    return sessionStorage.getItem('user') !== null;
  }
}
