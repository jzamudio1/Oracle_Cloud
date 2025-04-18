import { SociosService } from './socios.service';
import { Component, OnInit } from '@angular/core';
import { ColumnConfig } from '../../shared/components/data-grid/data-grid.model';

@Component({
  selector: 'app-Socios',
  templateUrl: './Socios.component.html',
  styleUrls: ['./Socios.component.css'],
})
export class SociosComponent implements OnInit {
  constructor(private SociosService: SociosService) {}
  public displayColumn: ColumnConfig[] = [];
  public ELEMENT_DATA: any[] = [];
  ngOnInit() {
    this.loadGrid();
    this.loadSocios();
  }

  async loadSocios() {
    await this.SociosService.getSocios().then((resp) => {
      this.ELEMENT_DATA = resp;
    });
  }

  loadGrid() {
    this.displayColumn = [
      {
        columnDef: 'ID_SOC',
        header: 'Nº Socio',
        param: 'P_SOC_NUMERO',
        type: 'number',
      },
      {
        columnDef: 'Nombre',
        header: 'Nombre',
        param: 'P_NOMBRE',
        type: 'text',
      },
      {
        columnDef: 'Telefono',
        header: 'Telefono',
        param: 'P_TLF',
        type: 'number',
      },
      {
        columnDef: 'Fecha Alta',
        header: 'Fecha Alta',
        param: 'P_FEC_ALTA',
        type: 'date',
      },
    ];
  }
}
