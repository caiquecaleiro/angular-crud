import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { GridComponent } from './components/grid/grid.component';
import { routing } from './app.routing';
import { PortletComponent } from './components/portlet/portlet.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { TodoService } from './shared/services/todo-service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    GridComponent,
    PortletComponent,
    PageContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
