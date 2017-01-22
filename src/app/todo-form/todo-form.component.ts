import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { TodoService } from '../shared/services/todo-service';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit, OnDestroy {
  todoForm: FormGroup;
  private editMode: boolean = false;
  private id: number = null;
  private subscription: Subscription;
  private error: string;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.editMode = true;
          this.id = params['id'];
          
          this.todoService.fetchTodo(this.id)
            .subscribe(
              todo => {
                (<FormControl>this.todoForm.controls['text']).setValue(todo.text);
                (<FormControl>this.todoForm.controls['completed']).setValue(todo.completed);
              },
              error => this.error = error
            );
        } 
        this.initForm();
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(todo: Todo) {
    if (this.editMode) {
      this.todoService.updateTodo(this.id, todo)
        .subscribe(
          todo => this.router.navigate(['/']),
          error => this.error = error
        );
    } else {
      this.todoService.createTodo(todo)
        .subscribe(
          todo => this.router.navigate(['/']),
          error => this.error = error
        );
    }
  }

  private initForm() {
    this.todoForm = this.formBuilder.group({
      text: ['', Validators.required],
      completed: [{ value: false, disabled: !this.editMode }]
    });
  }

}
