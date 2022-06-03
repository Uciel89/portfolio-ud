import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TokenService } from '../services/security/token.service';

@Injectable({
  providedIn: 'root',
})

/* 

  Con el guard podemos restringir el acceso a ciertas rutas de nuestra aplicación web 
  y asegurarnos que solo puedan acceder aquellos usuarios autenticados en la aplicación

*/
export class PersonGuardService implements CanActivate {
  realRol?: string;

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRol = route.data['expectedRol'];
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';
    roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.realRol = 'admin';
      }
    });
    if (
      !this.tokenService.getToken() ||
      expectedRol.indexOf(this.realRol) === -1
    ) {
      this.router.navigate(['portfolio/login']);
      return false;
    }
    return true;
  }
}
