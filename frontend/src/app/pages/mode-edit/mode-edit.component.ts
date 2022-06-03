import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/security/token.service';

@Component({
  selector: 'app-mode-edit',
  templateUrl: './mode-edit.component.html',
  styleUrls: ['./mode-edit.component.css'],
})
export class ModeEditComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    // Lo utilizamos para mostrar cosas cuando si o si, el ususuario esta logeado
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();

    this.router.navigate(['/portfolio']);
  }
}
