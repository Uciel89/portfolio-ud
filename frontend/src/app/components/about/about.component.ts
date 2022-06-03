import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/db_models/persona';
import { PersonaService } from 'src/app/services/db/persona.service';
import { TokenService } from 'src/app/services/security/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  personas: Persona[] = [];
  isAdmin = false; 
  roles!: string[];

  constructor(private personaService: PersonaService,private token: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPersona();
    this.roles = this.token.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  // Método para cargar datos desde la base de datos
  cargarPersona(){
    this.personaService.getPersona().subscribe(
      data => {
        this.personas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  // Método para enviarnos al modal de edición
  Editar(persona:Persona): void{
    // Enviamos el id del registro que presionamos en nuestra tabla
    localStorage.setItem("id", persona.id!!.toString());
    this.router.navigate(["editar"]);
  }
}