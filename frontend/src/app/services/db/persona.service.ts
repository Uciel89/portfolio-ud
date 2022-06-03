import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/db_models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/mode_edit/';

  /*===/ Métodos HTTP /===*/
  public getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url + 'persona');
  }

  public getOnePerson(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + `persona_uno/${id}`);
  }

  createPersona(persona: Persona): Observable<any> {
    return this.http.post<Persona>(this.url + 'crear_persona', persona);
  }

  deletePersona(id: string | number): Observable<any> {
    return this.http.delete<Persona>(this.url + `eliminar_persona/${id}`);
  }

  updatePersona(persona: Persona): Observable<any> {
    return this.http.put<any>(this.url + `editar_persona`, persona);
  }
}
