import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list-angular';
  mostrarAddTarefa: boolean = false;

  @Output() mostrarAddTarefaChange = new EventEmitter<boolean>();

  AlteraVisualizacao(valor: boolean) {
    this.mostrarAddTarefa = valor;
  }
}
