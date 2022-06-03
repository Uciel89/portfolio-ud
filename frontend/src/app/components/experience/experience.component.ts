import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/db_models/experiencia';
import { ExperienciaService } from 'src/app/services/db/experiencia.service';
import { TokenService } from 'src/app/services/security/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiencias: Experiencia[] = [];
  isAdmin = false; 
  roles!: string[];

  constructor(private experienciaService: ExperienciaService,private token: TokenService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    this.roles = this.token.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  // Método para cargar datos desde la base de datos
  cargarExperiencia(){
    this.experienciaService.getExperiencia().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
