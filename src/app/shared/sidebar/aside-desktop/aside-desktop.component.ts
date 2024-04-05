import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonTextIconSidebarComponent } from '../../components/button-text-icon-sidebar/button-text-icon-sidebar.component';
import { RouterLink, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-aside-desktop',
  standalone: true,
  imports: [ButtonTextIconSidebarComponent, RouterLink, RouterOutlet],
  templateUrl: './aside-desktop.component.html',
  styleUrl: './aside-desktop.component.css'
})
export class AsideDesktopComponent {
  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Dashboard',
        icon: 'uil uil-estate',
        route: ['/'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: ['Nosotros'],
        icon: 'uil uil-document-info',
        route: ['/', 'nosotros']
      },
      {
        name: ['Paquetes'],
        icon: 'uil uil-document-info',
        route: ['/', 'servicios']
      },
      {
        name: ['Destinos'],
        icon: 'uil uil-document-info',
        route: ['/', 'destinos']
      },
      {
        name: ['Promociones'],
        icon: 'uil uil-document-info',
        route: ['/', 'promociones']
      },
      {
        name: ['Ventajas'],
        icon: 'uil uil-document-info',
        route: ['/', 'ventajas']
      },
      {
        name: ['Oros servicios'],
        icon: 'uil uil-document-info',
        route: ['/', 'ventajas']
      },
      {
        name: ['Redes sociales'],
        icon: 'uil uil-document-info',
        route: ['/', 'ventajas']
      },
    ]
  }

  @Output() abrirComponenteEvent = new EventEmitter<void>();
  abrirComponente(): void {
    this.abrirComponenteEvent.emit();
  }


  @Output() cerrarComponenteEvent = new EventEmitter<void>();
  cerrarComponente(): void {
    this.cerrarComponenteEvent.emit();
  }

  refrescarLista() {
    window.location.reload();
  }
}
