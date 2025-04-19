import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/apiService.service';
import { EjecutarRequest } from '../../api/interface/Request';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadMenu();
  }
  public menu: any[] = [];

  getMenu(): Promise<any[]> {
    let req: EjecutarRequest = {
      P_CNA_ACCION: 'S',
      P_CNA_HANDLER: 'CGetMenu',
      p_param: null,
    };

    return new Promise((resolve) => {
      let menu: any[] = [];
      this.apiService.Ejecutar(req, {} as any).subscribe((resp) => {
        menu = resp.Resultados;
        resolve(menu);
      });
    });
  }

  async loadMenu() {
    await this.getMenu().then((resp) => {
      this.menu = resp;
    });
  }
}
