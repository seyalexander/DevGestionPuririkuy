import { VentajasService } from './../../../../core/services/ventajas/ventajas.service';
import { Component } from '@angular/core';
import { HeaderPagesComponent } from '../../componentes/organisms/header-pages/header-pages.component';
import { ventajasModel } from '../../../../core/models/ventajas.model';
import { Observable, of } from 'rxjs';
import { TablaDatosVentajasComponent } from '../../componentes/tabla-datos-ventajas/tabla-datos-ventajas.component';

@Component({
  selector: 'app-ventajas-listado',
  standalone: true,
  imports: [HeaderPagesComponent,TablaDatosVentajasComponent],
  templateUrl: './ventajas-listado.component.html',
  styleUrl: './ventajas-listado.component.css'
})
export class VentajasListadoComponent {
  nombrePagina: String = 'VENTAJAS';
  isLoading = false;
  dataVentajasLista: Array<ventajasModel> = [];
  datosVentajas$ :Observable<ventajasModel[]> = of([]);

  constructor(
    private ventajasService: VentajasService,
  ) { }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  recibirData(event: String): void {
    console.log('Estoy en el padre:...', event);

  }

  ngOnInit(): void {
    this.datosVentajas$ = this.ventajasService.getVentajas();
    const ObservarDatosVentajas = this.ventajasService.datosVentajas$.subscribe(Response => {
      this.dataVentajasLista = Response
    })
  }
}
