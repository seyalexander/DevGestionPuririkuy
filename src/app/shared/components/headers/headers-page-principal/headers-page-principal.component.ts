import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-headers-page-principal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './headers-page-principal.component.html',
  styleUrl: './headers-page-principal.component.css'
})
export class HeadersPagePrincipalComponent {
  src: String = ''

  @Output() cerrarComponenteEvent = new EventEmitter<void>();
  @Output() callBackData: EventEmitter<any> = new EventEmitter;

  cerrarComponente(): void {
    this.cerrarComponenteEvent.emit();
  }

  @Input() nombrePagina: String = '';

  callSearch(term: String): void {
    if (term.length >= 3) {
      this.callBackData.emit(term);
    }
  }
}
