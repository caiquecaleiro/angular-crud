import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit({ text, completed }) {
    console.log(text, completed);
  }

  private initForm() {
    let text = '';
    let completed = false;

    this.todoForm = this.formBuilder.group({
      text: [text, Validators.required],
      completed: [completed]
    });
  }

}
