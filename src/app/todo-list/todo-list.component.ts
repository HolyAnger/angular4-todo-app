import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from './models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems: TodoItem[];
  searchValue = '';

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoListService.getTodoItems().then((items) => this.todoItems = items);
  }

  addItem(name) {
    this.todoListService.addTodoItem(name);
  }

  changeSearchValue(searchValue) {
    this.searchValue = searchValue;
  }

  toggleItem(toggledItem: TodoItem) {
    toggledItem.done = !toggledItem.done;
  }

  removeItem(removedItemId: number) {
    this.todoItems = this.todoItems.filter((item) => item.id !== removedItemId);
  }

  setEditItem(item: TodoItem, inputItem: HTMLInputElement) {
    item.isEdit = true;
    setTimeout(() => inputItem.focus(), 100);
  }

  applyEdit(item: TodoItem, inputItem: HTMLInputElement) {
    const { value } = inputItem;
    if (!value) {
      this.removeItem(item.id);
      return;
    }

    item.name = value;
    item.isEdit = false;
  }
}
