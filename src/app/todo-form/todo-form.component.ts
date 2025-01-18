import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  imports: [],
  templateUrl: './todo-form.component.html',
  standalone: true,
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  @Output() todoAdded: EventEmitter<string> = new EventEmitter<string>();
  addTodo(task: string){
    task = task.trim();
    if(task.length!==0){ this.todoAdded.emit(task); }
  }
}
