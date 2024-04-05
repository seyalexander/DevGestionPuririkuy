import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-pages',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header-pages.component.html',
  styleUrl: './header-pages.component.css'
})
export class HeaderPagesComponent {
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
