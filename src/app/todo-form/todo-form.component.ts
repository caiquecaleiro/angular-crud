import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { TodoService } from '../shared/services/todo-service';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  editMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private router : Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(todo: Todo) {
    this.todoService.createTodo(todo)
      .subscribe(
        todo => this.router.navigate(['/']),
        error => console.log(error)
      );
  }

  private initForm() {
    this.todoForm = this.formBuilder.group({
      text: ['', Validators.required],
      completed: [{ value: false, disabled: !this.editMode }]
    });
  }

}
