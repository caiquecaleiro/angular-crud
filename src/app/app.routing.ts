import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';

const APP_ROUTES: Routes = [
  { path: '', component: TodoListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);