import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-th-table-icon-text-principal',
  standalone: true,
  imports: [],
  templateUrl: './th-table-icon-text-principal.component.html',
  styleUrl: './th-table-icon-text-principal.component.css'
})
export class ThTableIconTextPrincipalComponent {
  @Input() nombreTh: string = '';
}
