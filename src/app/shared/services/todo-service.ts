import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'

import { Todo } from '../interfaces/todo';

@Injectable()
export class TodoService {
  API_URL = 'http://localhost:3000';
  
  constructor(private http: Http) { }

  fetchTodos() : Observable<Todo[]> {
    return this.http.get(`${this.API_URL}/todos`)
      .map((response: Response) => response.json().todos)
      .catch((error: any) => Observable.throw(error.json().error));
  }

  deleteTodo(todo: Todo) : Observable<Response> {
    return this.http.delete(`${this.API_URL}/todos/${todo._id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error));
  }

  updateTodo(todo: Todo) : Observable<Response> {
    return this.http.patch(`${this.API_URL}/todos/${todo._id}`, todo)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error));
  }

  createTodo(todo: Todo) : Observable<Response> {
    return this.http.post(`${this.API_URL}/todos`, todo)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error));
  }
}