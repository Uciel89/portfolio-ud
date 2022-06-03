import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/models/db_models/habilidad';
import { HabilidadService } from 'src/app/services/db/habilidad.service';
import { AuthService } from 'src/app/services/security/auth.service';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css'],
})
export class ModalHabilidadesComponent implements OnInit {
  @Input() title = '';

  public show = false;

  // Variables globales
  habilidadList: Habilidad[] = [];
  isLogged: Boolean = false;
  habilidadForm: FormGroup;

  constructor(
    private habilidadService: HabilidadService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.habilidadForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      url_logo: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }

  /*===/ Configuraciones del formulario /===*/
  private clearForm() {
    this.habilidadForm.setValue({
      id: '20',
      nombre: '',
      url_logo: '',
      porcentaje: '',
    });
  }

  onNewHabilidad() {
    this.clearForm();
    this.showModal();
  }

  private loadForm(habilidad: Habilidad) {
    this.habilidadForm.setValue({
      id: habilidad.id,
      nombre: habilidad.nombre,
      url_logo: habilidad.url_logo,
      porcentaje: habilidad.porcentaje,
    });
  }

  onEditHabilidad(index: number) {
    let habilidad: Habilidad = this.habilidadList[index];
    this.loadForm(habilidad);
    this.showModal();
  }

  onSubmit() {
    let habilidad: Habilidad = this.habilidadForm.value;

    if (this.habilidadForm.get('id')?.value == '') {
      this.habilidadService
        .createHabilidad(habilidad)
        .subscribe((newHabilidad: Habilidad) => {
          this.habilidadList.push(newHabilidad);
        });
    } else {
      this.habilidadService.updateHabilidad(habilidad).subscribe(() => {
        this.reloadDate();
      });
    }

    this.hideModal();
  }

  onDeletedHabilidad(index: number) {
    let habilidad: Habilidad = this.habilidadList[index];

    if (confirm('Va a eliminar este registro. ¿ Está seguro ?')) {
      this.habilidadService.deleteHabilidad(habilidad.id).subscribe(() => {
        this.reloadDate();
      });
    }
    this.refresh();
  }

  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.habilidadService.getHabilidad().subscribe((date) => {
      this.habilidadList = date;
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
