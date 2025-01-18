import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Task } from '../interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-app',
  imports: [ TodoFormComponent, TodoListComponent],
  templateUrl: './todo-app.component.html',
  standalone: true,
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent {
  todos: Task[];
  constructor() { this.todos = []; }
  addTodo(task: string){ this.todos.push({ id: uuidv4(), title: task, completed: false }); }
  deleteTodo(id: string){ this.todos=this.todos.filter(todo => todo.id!==id); }
  toggleTodo(id: string){
    const todo: Task|undefined = this.todos.find(todo => todo.id === id);
    if(todo){ todo.completed = !todo.completed; }
  }
}
