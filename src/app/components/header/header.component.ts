import { Component } from '@angular/core';
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

  mostrarAddTarefa: boolean = false;

  AlteraVisualizacao(valor: boolean) {
    this.mostrarAddTarefa = valor;
  }
}
