import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from 'src/app/models/db_models/habilidad';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/mode_edit/';

  /*===/ Métodos HTTP /===*/
  public getHabilidad(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.url + 'habilidad');
  }

  createHabilidad(habilidad: Habilidad, id: number): Observable<any> {
    return this.http.post<Habilidad>(this.url + `crear_habilidad/${id}`, habilidad, httpOptions);
  }

  deleteHabilidad(id: number): Observable<any> {
    return this.http.delete<Habilidad>(this.url + `eliminar_habilidad/${id}`);
  }

  updateHabilidad(habilidad: Habilidad): Observable<any> {
    return this.http.put<any>(this.url + `editar_habilidad`, habilidad, httpOptions);
  }
}
