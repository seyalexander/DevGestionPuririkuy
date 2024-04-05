import { Component, Input } from '@angular/core';
import { ThTableIconTextComponent } from '../atoms/th-table-icon-text/th-table-icon-text.component';
import { ventajasModel } from '../../../../core/models/ventajas.model';
import { MensajeTablaVaciaComponent } from '../organisms/mensaje-tabla-vacia/mensaje-tabla-vacia.component';
import { LoadersTabletsPagesComponent } from '../organisms/loaders-tablets-pages/loaders-tablets-pages.component';

@Component({
  selector: 'app-tabla-datos-ventajas',
  standalone: true,
  imports: [ThTableIconTextComponent, MensajeTablaVaciaComponent, LoadersTabletsPagesComponent],
  templateUrl: './tabla-datos-ventajas.component.html',
  styleUrl: './tabla-datos-ventajas.component.css'
})
export class TablaDatosVentajasComponent {
  @Input() nombrePagina: String = '';
  @Input() dataVentajas: Array<ventajasModel> = [];
  @Input() isLoading: boolean = true;
}
