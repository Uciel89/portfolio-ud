import { Component, OnInit } from '@angular/core';
import { Demo } from 'src/app/models/db_models/demo';
import { DemoService } from 'src/app/services/db/demo.service';
import { TokenService } from 'src/app/services/security/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demos: Demo[] = [];
  isAdmin = false; 
  roles!: string[];

  constructor(private demoService: DemoService,private token: TokenService) { }

  ngOnInit(): void {
    this.cargarDemo();
    this.roles = this.token.getAuthorities();

    // Verificamos si el rol es de administrador
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  // Método para cargar datos desde la base de datos
  cargarDemo(){
    this.demoService.getDemo().subscribe(
      data => {
        this.demos = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
