import { VentajasService } from './../../../../core/services/ventajas/ventajas.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ventajasModel } from '../../../../core/models/ventajas.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventajas-registro',
  standalone: true,
  imports: [],
  templateUrl: './ventajas-registro.component.html',
  styleUrl: './ventajas-registro.component.css'
})
export class VentajasRegistroComponent {
  tituloSwalCorrecto: String = 'Confirmación'

  Ventajas: ventajasModel = new ventajasModel();
  formularioRegistro: FormGroup = new FormGroup({});

  constructor(private ventajasService: VentajasService) {}

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
      ventajasModelItemA: new FormControl ('', [
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.required
      ]),
      ventajasModelItemB: new FormControl ('', [
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.required
      ]),
      ventajasModelItemC: new FormControl ('', [
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.required
      ]),
      ventajasModelItemD: new FormControl ('', [
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.required
      ]),
    })
  }

  public sendClientes(): void {
    this.ventajasService.createVentajas(this.Ventajas)
    .subscribe ((response: any) => {
      this.cerrarComponente();
      this.mensajeValidacionRegistroCorrecto(response);
    });
  }

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Ventaja creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaVentajas();
    });
  }

  regresarListaVentajas() {
    window.location.reload();
  }
}
