import { Component, OnInit } from '@angular/core';

import { TodoDataService } from './services/todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.todoDataService.getAllTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  onAddTodo(todo) {
    this.todoDataService.addTodo(todo).subscribe((newTodo) => {
      this.todos.push(newTodo);
    });
  }

  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo).subscribe((updatedTodo) => {
      todo = updatedTodo;
    });
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id).subscribe((_) => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }
}
