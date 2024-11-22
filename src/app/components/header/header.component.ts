import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title: string = 'Tarefas';
  @Input() mostrarAddTarefa: boolean = false;
  @Input() AlteraVisualizacao!: (valor: boolean) => void;
}
