import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { routing } from './app.routing';
import { PortletComponent } from './components/portlet/portlet.component';
import { PageContainerComponent } from './components/page-container/page-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    PortletComponent,
    PageContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
