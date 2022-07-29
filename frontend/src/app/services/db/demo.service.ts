import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demo } from '../../models/db_models/demo';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/mode_edit/';

  /*===/ Métodos HTTP /===*/
  public getDemo(): Observable<Demo[]> {
    return this.http.get<Demo[]>(this.url + 'demo');
  }

  createDemo(demo: Demo, id: number): Observable<any> {
    return this.http.post<Demo>(this.url + `crear_demo/${id}`, demo, httpOptions);
  }

  deleteDemo(id: number): Observable<any> {
    return this.http.delete<Demo>(this.url + `eliminar_demo/${id}`);
  }

  updateDemo(demo: Demo): Observable<any> {
    return this.http.put<any>(this.url + `editar_demo`, demo, httpOptions);
  }
}
