import { Component } from '@angular/core';
import { HeadersPagePrincipalComponent } from '../../../../shared/components/headers/headers-page-principal/headers-page-principal.component';
import { serviciosModel } from '../../../../core/models/servicios.model';
import { Observable, of } from 'rxjs';
import { ServiciosService } from '../../../../core/services/servicios/servicios.service';

@Component({
  selector: 'app-servicios-listado',
  standalone: true,
  imports: [HeadersPagePrincipalComponent],
  templateUrl: './servicios-listado.component.html',
  styleUrl: './servicios-listado.component.css'
})
export class ServiciosListadoComponent {
  nombrePagina: String = 'PAQUETES';
  isLoading = false;
  dataVentajasLista: Array<serviciosModel> = [];
  datosVentajas$ :Observable<serviciosModel[]> = of([]);


  constructor(
    private serviciosService: ServiciosService,
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
