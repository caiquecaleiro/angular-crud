import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crud-buttons',
  templateUrl: './crud-buttons.component.html'
})
export class CrudButtonsComponent {
  @Output() onNew = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  onNewClick() {
    this.onNew.emit();
  }

  onEditClick() {
    this.onEdit.emit();
  }

  onDeleteClick() {
    this.onDelete.emit();
  }
}
