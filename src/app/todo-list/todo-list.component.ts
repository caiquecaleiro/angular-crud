import { Component, OnInit } from '@angular/core';

import { TodoService } from '../shared/services/todo-service';
import { Todo } from '../shared/interfaces/todo';
import { Cell } from '../shared/interfaces/cell';
import { ColumnType } from '../shared/enum/columnType';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  gridCells: Array<Cell> = [];
  selectedRow: Object = {};

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.setGridCells();
    this.loadTodos();
  }

  setGridCells() {
    this.gridCells = [
      { name: 'Text', value: 'text', type: ColumnType.STRING },
      { name: 'Completed', value: 'completed', type: ColumnType.BOOLEAN },
      { name: 'Completed at', value: 'completedAt', type: ColumnType.TIMESTAMP }
    ]
  }

  loadTodos() {
    this.todoService.fetchTodos()
      .subscribe(
        todos => this.todos = todos,
        error => console.log(error)
      );
  }

  onRowSelect(object) {
    console.log(object);
    this.selectedRow = object;
  }

  onNew() {
    console.log('new');
  }

  onEdit() {
    console.log('edit');
  }

  onDelete() {
    console.log('delete');
  }
}
