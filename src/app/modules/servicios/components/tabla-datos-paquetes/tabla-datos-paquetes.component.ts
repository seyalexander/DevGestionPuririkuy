import { Component, Input } from '@angular/core';
import { serviciosModel } from '../../../../core/models/servicios.model';
import { ThTableIconTextPrincipalComponent } from '../../../../shared/components/th-table-icon-text-principal/th-table-icon-text-principal.component';

@Component({
  selector: 'app-tabla-datos-paquetes',
  standalone: true,
  imports: [ThTableIconTextPrincipalComponent],
  templateUrl: './tabla-datos-paquetes.component.html',
  styleUrl: './tabla-datos-paquetes.component.css'
})
export class TablaDatosPaquetesComponent {
  @Input() nombrePagina:  String = '';
  @Input() dataPaquetes:  Array<serviciosModel> = [];
  @Input() isLoading : boolean = true;
}
