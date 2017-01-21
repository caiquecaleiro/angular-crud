import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { Cell } from '../../shared/interfaces/cell';
import { ColumnType } from '../../shared/enum/columnType';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() data: Array<Object>;
  @Input() cells: Array<Cell>;
  @Input() selectedRow: Object;
  @Output() onRowSelect = new EventEmitter();

  setSelectedRow(object) {
    if (this.selectedRow === object) {
      object = {};
    } 
    this.onRowSelect.emit(object);
  }

  validateValue(value, type) {
    switch (type) {
      case ColumnType.BOOLEAN: 
        return value ? 'Yes' : 'No';
      case ColumnType.TIMESTAMP:
        return value ? moment(new Date(value)).format('L LTS') : '';
      default:
        return value;
    }
  }

}
