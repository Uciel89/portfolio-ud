import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Demo } from 'src/app/models/db_models/demo';
import { DemoService } from 'src/app/services/db/demo.service';
import { AuthService } from 'src/app/services/security/auth.service';
@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.css'],
})
export class ModalDemoComponent implements OnInit {
  @Input() title = '';

  public show = false;

  // Variables globales
  demoList: Demo[] = [];
  isLogged: Boolean = false;
  demoForm: FormGroup;

  constructor(
    private demoService: DemoService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.demoForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      url_demo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();

    this.reloadDate();
  }

  /*===/ Configuraciones del formulario /===*/

  private clearForm() {
    this.demoForm.setValue({
      id: '',
      nombre: '',
      descripcion: '',
      url_demo: '',
    });
  }

  onNewDemo() {
    this.clearForm();
    this.showModal();
  }

  private loadForm(demo: Demo) {
    this.demoForm.setValue({
      id: demo.id,
      nombre: demo.nombre,
      descripcion: demo.descripcion,
      url_demo: demo.url_demo,
    });
  }

  onEditDemo(index: number) {
    let demo: Demo = this.demoList[index];
    this.loadForm(demo);
    this.showModal();
  }

  onSubmit() {
    let demo: Demo = this.demoForm.value;

    if (this.demoForm.get('id')?.value == '') {
      this.demoService
      .createDemo(demo, 1)
      .subscribe((newDemo: Demo) => {
        this.demoList.push(newDemo);
      });
    } else {
      this.demoService.updateDemo(demo).subscribe(() => {
        this.reloadDate();
      });
    }

    this.hideModal();
    this.refresh();
  }

  onDeletedDemo(index: number) {
    let demo: Demo = this.demoList[index];

    if (confirm('Va a eliminar este registro. ¿ Está seguro ?')) {
      this.demoService.deleteDemo(demo.id).subscribe(() => {
        this.reloadDate();
      });
      this.refresh();
    }
  }

  // Método para recurar los datos de la base de datos
  reloadDate() {
    this.demoService.getDemo().subscribe((date) => {
      this.demoList = date;
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
