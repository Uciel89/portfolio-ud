import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/security_models/login-usuario';
import { AuthService } from 'src/app/services/security/auth.service';
import { TokenService } from 'src/app/services/security/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /*===/ Vamos a implementar el servicion de auth y token(para validar justamente el token que pasamos al momento de iniciar sesion) /===*/

  // Variables

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Comprovamos si estamos logeados
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLoginFail = false;

        // Mandamos todos los valores para formar un token
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreusuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['portfolio/mode_edit']);
      },
      (err) => {
        this.isLogged = false;
        this.isLoginFail = true;

        console.log(err);
      }
    );
  }
}
