import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ColumnConfig } from './data-grid.model';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() columnsConfig: ColumnConfig[] = [];
  @Input() dataSource: any[] = [];

  /** Instancia única de MatTableDataSource */
  public tableData = new MatTableDataSource<any>([]);

  /** Columnas que renderizo en la tabla */
  public displayedColumns: string[] = [];

  @Output() rowChanged = new EventEmitter<any>();
  @Output() rowDeleted = new EventEmitter<number>();

  /** Fila seleccionada, vinculable desde el padre */
  @Input() selectedRow: any | null = null;
  @Output() selectedRowChange = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output() tableDataExported = new EventEmitter<MatTableDataSource<any>>();
  emitDataSource() {
    this.tableDataExported.emit(this.tableData);
  }
  /** Selección de filas (si usas checkboxes) */
  selection = new SelectionModel<any>(true, []);

  ngOnInit(): void {
    // Preparo columnas
    this.displayedColumns = this.columnsConfig.map((c) => c.columnDef);
  }

  ngAfterViewInit(): void {
    // Conecto paginator y sort en cuanto estén disponibles
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
    // Emitimos el objeto entero
    this.emitDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Cuando cambie el array de datos, actualizo la property .data
    if (changes['dataSource'] && !changes['dataSource'].isFirstChange()) {
      this.tableData.data = this.dataSource;
      // Conecto paginator y sort en cuanto estén disponibles
      this.tableData.paginator = this.paginator;
      this.tableData.sort = this.sort;
    }

    // Si cambian las columnas...
    if (changes['columnsConfig']) {
      this.displayedColumns = this.columnsConfig.map((c) => c.columnDef);
    }
  }

  onSelectRow(row: any) {
    this.selectedRow = row;
    this.selectedRowChange.emit(row);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    return row ? `${this.selectedRow === row ? 'select' : 'deselect'} row` : '';
  }
}
