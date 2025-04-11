import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from '../../../api/apiService.service';
import { EjecutarRequest } from '../../../api/interface/Request';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css',
})
export class NavegacionComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  constructor(private apiService: ApiService) {}

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

  ngOnInit(): void {
    this.loadMenu();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
