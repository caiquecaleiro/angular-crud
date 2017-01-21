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
}