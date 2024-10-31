import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { EjecutarRequest } from './interface/Request';
import { EjecutarResponse } from './interface/EjecutarResponse';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://g36517cb0388462-prmrbyvhf2lmgl3x.adb.eu-madrid-1.oraclecloudapps.com/ords/apibeginend/PostApiBbdd/Api_Connect';

  constructor(private http: HttpClient) { }

  // Método para hacer una petición POST
  private postData(request: EjecutarRequest): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }


  public Ejecutar<T>(request: EjecutarRequest, entity: T): Observable<EjecutarResponse<T>> {
    let resultados: T[] = [];
    let response = {} as EjecutarResponse<T>;
    response.Resultados = resultados;
    let respuesta = new Subject<EjecutarResponse<T>>();
    //Lanzamos Peticion a la API
    this.postData(request).subscribe((resp) => {
      const data = resp?.Cursor;
      if (data && data.length) {
        data.forEach((item: any) => {
          response.Resultados.push(item);
        });
      }
      respuesta.next(response);
    }
    );
    return respuesta;
  }
}