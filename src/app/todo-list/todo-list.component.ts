import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/user.interface';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  standalone: true,
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todoList!: Task[];
  @Output() deletedTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggledTodo: EventEmitter<string> = new EventEmitter<string>();
  deleteTodo(id: string) { this.deletedTodo.emit(id); }
  toggleTodo(id: string) { this.toggledTodo.emit(id); }
}
