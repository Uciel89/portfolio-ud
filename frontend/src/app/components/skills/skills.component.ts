import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/db_models/habilidad';
import { HabilidadService } from 'src/app/services/db/habilidad.service';
import { TokenService } from 'src/app/services/security/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades: Habilidad[] = [];
  isAdmin = false; 
  roles!: string[];

  constructor(private habilidadService: HabilidadService,private token: TokenService) { }

  ngOnInit(): void {
    this.cargarDemo();
    this.roles = this.token.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  // Método para cargar datos desde la base de datos
  cargarDemo(){
    this.habilidadService.getHabilidad().subscribe(
      data => {
        this.habilidades = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  skill_bar(porcentaje: string){
    return porcentaje;
  }
}
