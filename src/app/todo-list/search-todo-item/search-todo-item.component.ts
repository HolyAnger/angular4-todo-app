import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-todo-item',
  templateUrl: './search-todo-item.component.html',
  styleUrls: ['./search-todo-item.component.css']
})
export class SearchTodoItemComponent {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  searchValue = '';

  constructor() { }

  onSearchChange() {
    this.onSearch.emit(this.searchValue);
  }

}
