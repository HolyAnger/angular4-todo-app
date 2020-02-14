import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent {
  @Output() onAddItem: EventEmitter<string> = new EventEmitter();
  newItemName = '';

  constructor() { }

  addItem() {
    if (!this.newItemName) {
      alert('Item name cannot be empty!');
      return;
    }

    this.onAddItem.emit(this.newItemName);
    this.newItemName = '';
  }

}
