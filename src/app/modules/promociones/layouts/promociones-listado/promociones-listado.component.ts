import { Component } from '@angular/core';
import { PromocionesModel } from '../../../../core/models/promociones.model';
import { Observable, of } from 'rxjs';
import { PromocionesService } from '../../../../core/services/promociones/promociones.service';
import { HeadersPagePrincipalComponent } from '../../../../shared/components/headers/headers-page-principal/headers-page-principal.component';

@Component({
  selector: 'app-promociones-listado',
  standalone: true,
  imports: [HeadersPagePrincipalComponent],
  templateUrl: './promociones-listado.component.html',
  styleUrl: './promociones-listado.component.css'
})
export class PromocionesListadoComponent {
  nombrePagina: String = 'PROMOCIONES';
  isLoading = false;
  dataVentajasLista: Array<PromocionesModel> = [];
  datosVentajas$ :Observable<PromocionesModel[]> = of([]);


  constructor(
    private promocionesService: PromocionesService,
  ) { }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  recibirData(event: String): void {
    console.log('Estoy en el padre:...', event);

  }

  ngOnInit(): void {

    // this.datosVentajas$ = this.ventajasService.getVentajas();
    // const ObservarDatosVentajas = this.ventajasService.datosVentajas$.subscribe(Response => {
    //   this.dataVentajasLista = Response
    // })
  }
}
