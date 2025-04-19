import { SociosService } from './socios.service';
import { Component, OnInit } from '@angular/core';
import { ColumnConfig } from '../../shared/components/data-grid/data-grid.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-Socios',
  templateUrl: './Socios.component.html',
  styleUrls: ['./Socios.component.scss'],
})
export class SociosComponent implements OnInit {
  constructor(private SociosService: SociosService) {}
  public displayColumn: ColumnConfig[] = [];
  public ELEMENT_DATA: any[] = [];
  public tableData = new MatTableDataSource<any>([]);

  public selectrow: any;

  reciboTableData(tableData: MatTableDataSource<any>) {
    this.tableData = tableData;
    // Puedes acceder a tableData.data, tableData.paginator, tableData.sort, etc.
  }

  ngOnInit() {
    this.loadGrid();
    this.loadSocios();
  }

  async loadSocios() {
    await this.SociosService.getSocios().then((resp) => {
      this.ELEMENT_DATA = resp;
      this.selectrow = this.ELEMENT_DATA[0];
    });
  }

  addRow() {
    const newRow: any = {};

    // Opcional: inicializa las propiedades según tus columnas
    this.displayColumn.forEach((col) => {
      newRow[col.param] = ''; // o valores por defecto según col.type
    });

    // Añade la nueva fila
    const updatedData = [...this.tableData.data, newRow];
    this.tableData.data = updatedData;

    // Opcional: seleccionar automáticamente la nueva fila
    this.selectrow = newRow;
  }

  search() {
    this.loadSocios();
  }

  loadGrid() {
    this.displayColumn = [
      {
        columnDef: 'select',
        header: '',
        param: '',
        type: 'radioButton',
      },
      {
        columnDef: 'P_SOC_NUMERO',
        header: 'Nº Socio',
        param: 'P_SOC_NUMERO',
        type: 'number',
      },
      {
        columnDef: 'P_NOMBRE',
        header: 'Nombre',
        param: 'P_NOMBRE',
        type: 'text',
      },
      {
        columnDef: 'P_TLF',
        header: 'Telefono',
        param: 'P_TLF',
        type: 'number',
      },
      {
        columnDef: 'P_FEC_ALTA',
        header: 'Fecha Alta',
        param: 'P_FEC_ALTA',
        type: 'date',
      },
    ];
  }
}
