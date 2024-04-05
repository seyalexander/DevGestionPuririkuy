import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NosotrosListadoComponent } from './modules/nosotros/layouts/nosotros-listado/nosotros-listado.component';
import { AsideDesktopComponent } from './shared/sidebar/aside-desktop/aside-desktop.component';
import { VentajasListadoComponent } from './modules/ventajas/layouts/ventajas-listado/ventajas-listado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet, NosotrosListadoComponent, AsideDesktopComponent, VentajasListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-puririkui';

  showMenu:boolean = false;
  mostrarComponente(): void {
    this.showMenu = !this.showMenu;
  }
}
