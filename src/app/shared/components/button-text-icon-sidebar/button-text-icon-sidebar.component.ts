import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-text-icon-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button-text-icon-sidebar.component.html',
  styleUrl: './button-text-icon-sidebar.component.css'
})
export class ButtonTextIconSidebarComponent {
  @Input() iconLeftButton?: String = '';
  @Input() iconRigthButton?: String = '';
  @Input() textButton?: String = '';
  @Input() buttonAtom?: String = '';
  @Input() mode: 'aside' | 'header' | 'subHeader'= 'aside';
}
