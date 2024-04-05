import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ventajasModel } from '../../models/ventajas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentajasService {
  private url: string = 'http://localhost:8090/Puririkuy'
  datosVentajas$: Observable<ventajasModel[]> = of([])
  constructor(private http: HttpClient) { }

  getVentajas(): Observable<ventajasModel[]> {
    this.datosVentajas$ = this.http.get<ventajasModel[]>(`${this.url}/MostrarVentajas`);
    return this.datosVentajas$;
  }

  public createVentajas(ventajas: ventajasModel): Observable<object> {
    return this.http.post(`${this.url}/InsertarVentajas`, ventajas);
  }
}
