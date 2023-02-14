import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Pais} from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  private mapBuscarPor = {
    capital: 'capital',
    pais: 'name',
    region: 'region'
  };

  constructor(private http: HttpClient) {
  }

   buscarPor(termino: string, por: string): Observable<Pais[]> {
    const params = new HttpParams()
      .set('fields', 'capital,name,population,flag,alpha2Code');
    const map = this.mapBuscarPor[por];
    const url = `${this.apiUrl}/${map}/${termino}`;
    return this.http.get<Pais[]>(url, {params});
  }

  verPaisPorId(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }

}
