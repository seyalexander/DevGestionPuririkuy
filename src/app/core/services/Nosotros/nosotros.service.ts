import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nosotrosModel } from '../../models/nosotros.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  private url: string = 'http://localhost:8090/Puririkuy'
  datosNosotros$: Observable<nosotrosModel[]> = of([])

  constructor(private http: HttpClient) { }

  getNosotros(): Observable<nosotrosModel[]> {
    this.datosNosotros$ = this.http.get<nosotrosModel[]>(`${this.url}/MostrarNosotrosObjetivos`);
    return this.datosNosotros$;
  }

  public createNosotros(nosotros: nosotrosModel): Observable<object> {
    return this.http.post(`${this.url}/InsertarNosotrosObjetivos`, nosotros);
  }

}
