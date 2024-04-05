import { NosotrosListadoComponent } from './modules/nosotros/layouts/nosotros-listado/nosotros-listado.component';
import { Routes } from '@angular/router';
import { VentajasListadoComponent } from './modules/ventajas/layouts/ventajas-listado/ventajas-listado.component';
import { ServiciosListadoComponent } from './modules/servicios/layouts/servicios-listado/servicios-listado.component';
import { DestinosListadoComponent } from './modules/destinos/layouts/destinos-listado/destinos-listado.component';
import { PromocionesListadoComponent } from './modules/promociones/layouts/promociones-listado/promociones-listado.component';


export const routes: Routes = [
  {
    path: 'nosotros',
    component: NosotrosListadoComponent
  },
  {
    path: 'servicios',
    component: ServiciosListadoComponent
  },
  {
    path: 'destinos',
    component: DestinosListadoComponent
  },
  {
    path: 'promociones',
    component: PromocionesListadoComponent
  },
  {
    path: 'ventajas',
    component: VentajasListadoComponent
  },
  {
    path: 'redesSociales',
    component: VentajasListadoComponent
  }
];
