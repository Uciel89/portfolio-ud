import { Injectable } from '@angular/core';

// Variables que se van a almacenar dentro del navegador
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  roles: Array<string> = [];

  constructor() {}

  // Seteamos nuestro token
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  // Obtenemos nuestro token mediante un get
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)!!;
  }

  // UserName GET and SET
  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY)!!;
  }

  // AUTHORITIES GET and SET
  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  // Podemos obtener las autorizaciones
  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach(
        (authority: any) => {
          this.roles.push(authority.authority);
        }
      );
    }

    return this.roles;
  }

  // LogOut -> cerrar sesión
  public logOut(): void {
    window.sessionStorage.clear();
  }
}
