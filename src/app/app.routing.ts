import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const APP_ROUTES: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todo', component: TodoFormComponent },
  { path: 'todo/:id', component: TodoFormComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);