import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleConcluido = new EventEmitter<Task>();

  faTimes = faTimes;

  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes);
  }

  onDelete(task: Task) {
    console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleConcluido.emit(task);
  }
}
