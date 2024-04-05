import { Component, Input } from '@angular/core';
import { ThTableIconTextComponent } from '../atoms/th-table-icon-text/th-table-icon-text.component';
import { LoadersTablesPagesComponent } from '../organisms/loaders-tables-pages/loaders-tables-pages.component';
import { MensajeTablaVaciaComponent } from '../organisms/mensaje-tabla-vacia/mensaje-tabla-vacia.component';
import { nosotrosModel } from '../../../../core/models/nosotros.model';

@Component({
  selector: 'app-tabla-datos-nosotros',
  standalone: true,
  imports: [ThTableIconTextComponent, LoadersTablesPagesComponent, MensajeTablaVaciaComponent],
  templateUrl: './tabla-datos-nosotros.component.html',
  styleUrl: './tabla-datos-nosotros.component.css'
})
export class TablaDatosNosotrosComponent {
  @Input() nombrePagina:  String = '';
  @Input() dataNosotros:  Array<nosotrosModel> = [];
  @Input() isLoading : boolean = true;
}
