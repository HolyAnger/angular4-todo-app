import { Injectable } from '@angular/core';
import { TodoItem } from '../todo-list/models/todo-item.model';
import { TodoItems } from '../todo-list/mock-data';

@Injectable()
export class TodoListService {
  defaultDataItem: TodoItem = {
    id: 0,
    name: '',
    done: false,
    isEdit: false,
  };

  todoItems: TodoItem[] = TodoItems;

  getTodoItems(): Promise <TodoItem[]> {
    return Promise.resolve(this.todoItems);
  }

  getDefaultDataItem(): TodoItem {
    return this.defaultDataItem;
  }
}
