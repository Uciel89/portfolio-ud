import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/db_models/estudio';
import { EstudioService } from 'src/app/services/db/estudio.service';
import { TokenService } from 'src/app/services/security/token.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  estudios: Estudio[] = [];
  isAdmin = false; 
  roles!: string[];

  constructor(private estudioService: EstudioService,private token: TokenService) { }

  ngOnInit(): void {
    this.cargarEstudio();
    this.roles = this.token.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  // Método para cargar datos desde la base de datos
  cargarEstudio(){
    this.estudioService.getEstudio().subscribe(
      data => {
        this.estudios = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
