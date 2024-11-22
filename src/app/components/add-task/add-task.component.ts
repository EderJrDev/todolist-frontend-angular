import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input() mostrarAddTarefa: boolean = false;
  @Output() onAddTask = new EventEmitter<Task>();

  tarefa: string = '';
  caregoria: string = '';
  concluido: boolean = false;

  onSubmit() {
    if (!this.tarefa) {
      alert('Adicione uma tarefa!');
      return;
    }

    const novaTarefa = {
      task: this.tarefa,
      categoria: this.caregoria,
      concluido: this.concluido,
    };

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.caregoria = '';
    this.concluido = false;
  }
}
