import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/db_models/persona';
import { PersonaService } from 'src/app/services/db/persona.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persona: Persona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  // Método para cargar los datos desde la base de datos mediante el servicio "personaService"
  cargarPersona(){
    this.personaService.getPersona().subscribe(
      data => {
        this.persona = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  toAbout(){
    document.getElementById('about')?.scrollIntoView({behavior:"smooth"})
  }
}
