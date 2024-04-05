import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-tabla-vacia',
  standalone: true,
  imports: [],
  templateUrl: './mensaje-tabla-vacia.component.html',
  styleUrl: './mensaje-tabla-vacia.component.css'
})
export class MensajeTablaVaciaComponent {
  @Input() nombrePagina:  String = '';
}
