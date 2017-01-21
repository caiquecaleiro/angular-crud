import { Component, OnInit } from '@angular/core';

import { TodoService } from '../shared/services/todo-service';
import { Todo } from '../shared/interfaces/todo';
import { Cell } from '../shared/interfaces/cell';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  gridCells: Array<Cell> = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.setGridCells();
    this.loadTodos();
  }

  setGridCells() {
    this.gridCells = [
      { name: 'Text', value: 'text', type: 'string' },
      { name: 'Completed', value: 'completed', type: 'boolean' },
      { name: 'Completed at', value: 'completedAt', type: 'timestamp' }
    ]
  }

  loadTodos() {
    this.todoService.fetchTodos()
      .subscribe(
        todos => this.todos = todos,
        error => console.log(error)
      );
  }

}
