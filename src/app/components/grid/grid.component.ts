import { Component, OnInit, Input } from '@angular/core';

import { Cell } from '../../shared/interfaces/cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() data: {};
  @Input() cells: Array<Cell>;

  constructor() { }

  ngOnInit() {
  }

}
