import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { GridComponent } from './components/grid/grid.component';
import { routing } from './app.routing';
import { PortletComponent } from './components/portlet/portlet.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { TodoService } from './shared/services/todo-service';
import { CrudButtonsComponent } from './components/crud-buttons/crud-buttons.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    GridComponent,
    PortletComponent,
    PageContainerComponent,
    CrudButtonsComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
