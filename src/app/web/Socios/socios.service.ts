import { Injectable } from '@angular/core';
import { ApiService } from '../../api/apiService.service';
import { EjecutarRequest } from '../../api/interface/Request';

@Injectable({
  providedIn: 'root',
})
export class SociosService {
  constructor(private apiService: ApiService) {}

  getSocios(): Promise<any[]> {
    let req: EjecutarRequest = {
      P_CNA_ACCION: 'S',
      P_CNA_HANDLER: 'GetSocios',
      p_param: null,
    };

    return new Promise((resolve) => {
      let Socio: any[] = [];
      this.apiService.EjecutarApi(req, {} as any).subscribe((resp) => {
        Socio = resp.Resultados[0].T_SOCIOS_CLUB;
        resolve(Socio);
      });
    });
  }
}
