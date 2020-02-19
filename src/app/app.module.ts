import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickStopPropagationDirective } from './directives/stop-propagation.directive';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListService } from './services/todo-list.service';
import { AddTodoItemComponent } from './todo-list/add-todo-item/add-todo-item.component';
import { FormsModule } from '@angular/forms';
import { SearchTodoItemComponent } from './todo-list/search-todo-item/search-todo-item.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoItemComponent,
    ClickStopPropagationDirective,
    SearchTodoItemComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
