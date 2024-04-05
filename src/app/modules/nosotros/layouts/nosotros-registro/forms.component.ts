import { nosotrosModel } from './../../../../core/models/nosotros.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NosotrosService } from '../../../../core/services/Nosotros/nosotros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  tituloSwalCorrecto: String = 'Confirmación'

  Nosotros: nosotrosModel = new nosotrosModel();
  formularioRegistro: FormGroup = new FormGroup({});

  constructor(private nosotrosService: NosotrosService) {}

  @Output() cerrarComponenteEvent = new EventEmitter<void>();

  cerrarComponente(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  ngOnInit(): void {
    this.formularioRegistro = new FormGroup ({
      nosotrosCodInterno: new FormControl ('', [
        Validators.minLength(1),
        Validators.maxLength(1),
        Validators.required
      ]),
      nosotrostitulo: new FormControl ('', [
        Validators.minLength(6),
        Validators.maxLength(100),
        Validators.required
      ]),
      textoDetalle: new FormControl ('', [
        Validators.minLength(6),
        Validators.maxLength(200),
        Validators.required
      ])
    })
  }

  public sendClientes(): void {
    this.nosotrosService.createNosotros(this.Nosotros)
    .subscribe ((response: any) => {
      this.cerrarComponente();
      this.mensajeValidacionRegistroCorrecto(response);
    });
  }

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Cliente creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaNosotros();
    });
  }

  regresarListaNosotros() {
    window.location.reload();
  }
}
