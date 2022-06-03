import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudio } from 'src/app/models/db_models/estudio';
import { EstudioService } from 'src/app/services/db/estudio.service';
import { AuthService } from 'src/app/services/security/auth.service';
@Component({
  selector: 'app-modal-estudios',
  templateUrl: './modal-estudios.component.html',
  styleUrls: ['./modal-estudios.component.css'],
})
export class ModalEstudiosComponent implements OnInit {
  @Input() title = '';

  public show = false;
  public sobre_estudios_input = true;

  // Variables globales
  estudioList: Estudio[] = [];
  isLogged: Boolean = false;
  estudioForm: FormGroup;

  constructor(
    private estudioService: EstudioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.estudioForm = this.formBuilder.group({
      id: [''],
      sobre_estudio: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      url_foto: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }

  /*===/ Configuraciones del formulario /===*/

  private clearForm() {
    this.estudioForm.setValue({
      id: '20',
      sobre_estudio: '',
      nombre: '',
      descripcion: '',
      url_foto: '',
    });
  }

  onNewExperiencia() {
    this.clearForm();
    this.showModal();
  }

  private loadForm(estudio: Estudio) {
    this.estudioForm.setValue({
      id: estudio.id,
      sobre_estudio: estudio.sobre_estudio,
      nombre: estudio.nombre,
      descripcion: estudio.descripcion,
      url_foto: estudio.url_foto,
    });
  }

  onEditEstudio(index: number) {
    let estudio: Estudio = this.estudioList[index];
    this.loadForm(estudio);
    this.showModal();
  }

  onSubmit() {
    let estudio: Estudio = this.estudioForm.value;

    if (this.estudioForm.get('id')?.value == '') {
      this.sobre_estudios_input = false;
      this.estudioService
        .createEstudio(estudio)
        .subscribe((newEstudio: Estudio) => {
          this.estudioList.push(newEstudio);
        });
    } else {
      this.sobre_estudios_input = true;
      this.estudioService.updateEstudio(estudio).subscribe(() => {
        this.reloadDate();
      });
    }

    this.hideModal();
  }

  onDeletedEstudio(index: number) {
    let estudio: Estudio = this.estudioList[index];

    if (confirm('Va a eliminar este registro. ¿ Está seguro ?')) {
      this.estudioService.deleteEstudio(estudio.id).subscribe(() => {
        this.reloadDate();
      });
    }
    this.refresh();
  }

  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.estudioService.getEstudio().subscribe((date) => {
      this.estudioList = date;
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
