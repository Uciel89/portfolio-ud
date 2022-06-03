import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/db_models/persona';
import { PersonaService } from 'src/app/services/db/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
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
}
