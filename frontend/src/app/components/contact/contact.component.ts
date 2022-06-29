import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email_model/email';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Hacemos unas instancia del modelo de mail
  email: Email = new Email();

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
  }

  private enviarEmail() {
    this.emailService.sendEmail(this.email).subscribe(
      date => {
        console.log(date);
        confirm("El mensaje se envió correctamente");
        this.refresh();
      }
    )
  }

  public onSubmit() {
    this.enviarEmail();
  }

  refresh(): void {
    window.location.reload();
  }
}
