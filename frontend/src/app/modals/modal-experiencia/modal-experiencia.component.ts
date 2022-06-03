import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/models/db_models/experiencia';
import { ExperienciaService } from 'src/app/services/db/experiencia.service';
import { AuthService } from 'src/app/services/security/auth.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css'],
})
export class ModalExperienciaComponent implements OnInit {
  @Input() title = '';

  public show = false;

  // Variables globales
  experienciaList: Experiencia[] = [];
  isLogged: Boolean = false;
  experienciaForm: FormGroup;

  constructor(
    private experienciaService: ExperienciaService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.experienciaForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      trabajo: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      fecha_final: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }

  /*===/ Configuraciones del formulario /===*/

  private clearForm() {
    this.experienciaForm.patchValue({
      id: '20',
      nombre: '',
      trabajo: '',
      fecha_inico: '',
      fecha_final: '',
      descripcion: '',
    });
  }

  onNewExperiencia() {
    this.clearForm();
    this.showModal();
  }

  private loadForm(experiencia: Experiencia) {
    this.experienciaForm.setValue({
      id: experiencia.id,
      nombre: experiencia.nombre,
      trabajo: experiencia.trabajo,
      fecha_inicio: experiencia.fecha_inicio,
      fecha_final: experiencia.fecha_final,
      descripcion: experiencia.descripcion,
    });
  }

  onEditExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    this.loadForm(experiencia);
    this.showModal();
  }

  onSubmit() {
    let experiencia: Experiencia = this.experienciaForm.value;

    if (this.experienciaForm.get('id')?.value == '') {
      this.experienciaService
        .createExperiencia(experiencia)
        .subscribe((newExperiencia: Experiencia) => {
          this.experienciaList.push(newExperiencia);
          this.refresh();
        });
    } else {
      this.experienciaService.updateExperiencia(experiencia).subscribe(() => {
        this.reloadDate();
      });
    }

    this.hideModal();
  }

  onDeletedExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];

    if (confirm('Va a eliminar este registro. ¿ Está seguro ?')) {
      this.experienciaService
        .deleteExperiencia(experiencia.id)
        .subscribe(() => {
          this.reloadDate();
        });
    }
    this.refresh();
  }

  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.experienciaService.getExperiencia().subscribe((date) => {
      this.experienciaList = date;
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
    window.location.reload();
  }
}
