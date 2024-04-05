import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-th-table-icon-text',
  standalone: true,
  imports: [],
  templateUrl: './th-table-icon-text.component.html',
  styleUrl: './th-table-icon-text.component.css'
})
export class ThTableIconTextComponent {
  @Input() nombreTh: string = '';
}
