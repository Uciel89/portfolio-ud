import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/db_models/persona';
import { PersonaService } from 'src/app/services/db/persona.service';
import { AuthService } from 'src/app/services/security/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title = '';

  public show = false;

  // Variables globales
  personaList: Persona[] = [];
  isLogged: Boolean = false;
  personaForm: FormGroup;

  constructor(
    private personaService: PersonaService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.personaForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      domicilio: ['', [Validators.required]],
      email: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      sobre_mi: ['', [Validators.required]],
      url_img: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }

  /*===/ Configuraciones del formulario /===*/
  private loadForm(persona: Persona) {
    this.personaForm.setValue({
      id: persona.id,
      nombre: persona.nombre,
      apellido: persona.apellido,
      domicilio: persona.domicilio,
      email: persona.email,
      celular: persona.celular,
      sobre_mi: persona.sobre_mi,
      url_img: persona.url_img,
    });
  }

  onEditPersona(index: number) {
    let persona: Persona = this.personaList[index];
    this.loadForm(persona);
    this.showModal();
  }

  onSubmit() {
    let persona: Persona = this.personaForm.value;

    if (this.personaForm.get('id')?.value == '') {
      this.personaService
        .createPersona(persona)
        .subscribe((newPersona: Persona) => {
          this.personaList.push(newPersona);
        });
    } else {
      this.personaService.updatePersona(persona).subscribe(() => {
        this.reloadDate();
      });
    }
    this.hideModal();
    this.refresh();
  }

  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.personaService.getPersona().subscribe((date) => {
      this.personaList = date;
    });
  }

  // Métodos para cerrar y abrir el modal
  showModal() {
    this.show = true;
  }

  hideModal() {
    this.show = false;
  }

  refresh(): void {
    window.location.reload;
  }
}
