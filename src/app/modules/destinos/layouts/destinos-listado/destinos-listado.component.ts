import { Component } from '@angular/core';
import { HeadersPagePrincipalComponent } from '../../../../shared/components/headers/headers-page-principal/headers-page-principal.component';
import { destinosModel } from '../../../../core/models/destinos.model';
import { Observable, of } from 'rxjs';
import { DestinosService } from '../../../../core/services/destinos/destinos.service';

@Component({
  selector: 'app-destinos-listado',
  standalone: true,
  imports: [HeadersPagePrincipalComponent],
  templateUrl: './destinos-listado.component.html',
  styleUrl: './destinos-listado.component.css'
})
export class DestinosListadoComponent {
  nombrePagina: String = 'DESTINOS';
  isLoading = false;
  dataVentajasLista: Array<destinosModel> = [];
  datosVentajas$ :Observable<destinosModel[]> = of([]);


  constructor(
    private destinosService: DestinosService,
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
