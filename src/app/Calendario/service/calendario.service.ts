import { Injectable } from '@angular/core';
import { diasEspeciales } from '../interfaces/diasEspeciales';
import { EjecutarRequest } from '../../api/interface/Request';
import { ApiService } from '../../api/apiService.service';
import { TyrParam } from '../../api/interface/TyrParam';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private arrayDays: diasEspeciales[] = [];

  constructor(private apiService: ApiService) { }

  //Obtener Dias Especiales
  getDayCalendar(): diasEspeciales[] {
    let req: EjecutarRequest = {
      P_CNA_ACCION: "S",
      P_CNA_HANDLER: "CGetFullDiasEspeciales",
      p_param: null
    }

    this.apiService.Ejecutar(req, {} as diasEspeciales).subscribe((resp) => {
      this.arrayDays = resp.Resultados;
    })
    return this.arrayDays;
  }


  //Obtener Dias Especiales
  addDayCalendar(param: TyrParam[]): diasEspeciales[] {
    let req: EjecutarRequest = {
      P_CNA_ACCION: "S",
      P_CNA_HANDLER: "CPostDayCalendar",
      p_param: param
    }

    this.apiService.Ejecutar(req, {} as diasEspeciales).subscribe((resp) => {
      this.arrayDays = resp.Resultados;
    })
    return this.arrayDays;
  }

}
