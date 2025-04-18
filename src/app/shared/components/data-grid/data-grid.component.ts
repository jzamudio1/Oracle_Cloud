import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColumnConfig } from './data-grid.model';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  @Input() columnsConfig: ColumnConfig[] = [];
  @Input() dataSource: any[] = [];

  @Output() rowChanged = new EventEmitter<any>();
  @Output() rowDeleted = new EventEmitter<number>();

  public displayedColumns: any;
  ngOnInit(): void {
    this.displayedColumns = this.columnsConfig.map((c) => c.columnDef);
  }
}
