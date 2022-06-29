import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from 'src/app/models/email_model/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  url = 'https://portfolio-uciel.herokuapp.com/mode_edit/';

  sendEmail(email :Email): Observable<any> {
    return this.http.post(this.url + `email`, email);
  }

}
