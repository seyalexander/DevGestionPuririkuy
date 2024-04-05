import { Component } from '@angular/core';
import { TablaDatosNosotrosComponent } from '../../components/tabla-datos-nosotros/tabla-datos-nosotros.component';
import { nosotrosModel } from '../../../../core/models/nosotros.model';
import { HeaderPagesComponent } from '../../components/organisms/header-pages/header-pages.component';
import { FormsComponent } from '../nosotros-registro/forms.component';
import { NosotrosService } from '../../../../core/services/Nosotros/nosotros.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nosotros-listado',
  standalone: true,
  imports: [TablaDatosNosotrosComponent, HeaderPagesComponent, FormsComponent],
  templateUrl: './nosotros-listado.component.html',
  styleUrl: './nosotros-listado.component.css'
})
export class NosotrosListadoComponent {
  nombrePagina: String = 'NOSOTROS';
  isLoading = false;
  dataNosotrosLista: Array<nosotrosModel> = [];
  datosNosotros$ :Observable<nosotrosModel[]> = of([]);

  constructor(
    private nosotrosService: NosotrosService,
  ) { }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  recibirData(event: String): void {
    console.log('Estoy en el padre:...', event);

  }

  ngOnInit(): void {
    this.datosNosotros$ = this.nosotrosService.getNosotros();
    const ObservarDatosNosotros = this.nosotrosService.datosNosotros$.subscribe(Response => {
      this.dataNosotrosLista = Response
    })

  }
}
