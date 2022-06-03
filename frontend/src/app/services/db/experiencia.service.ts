import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../../models/db_models/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/mode_edit/';

  /*===/ Métodos HTTP /===*/
  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url + 'experiencia');
  }

  createExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post<Experiencia>(
      this.url + 'crear_experiencia',
      experiencia
    );
  }

  deleteExperiencia(id: number): Observable<any> {
    return this.http.delete<Experiencia>(
      this.url + `eliminar_experiencia/${id}`
    );
  }

  updateExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.url + `editar_experiencia`, experiencia);
  }
}
