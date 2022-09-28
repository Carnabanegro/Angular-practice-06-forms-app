import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../components/selectores/interfaces/countrys.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  private _continentes : string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  constructor(private http: HttpClient) { }



  get continentes() : string[] {
    return [...this._continentes]
  }


  buscarPorRegion(termino: string) : Observable<Country[]>{

    const query : string = `${environment.urlCountries}/region/${termino}` ;
    
    const params = new HttpParams().set('fields','name,cca3');

    return this.http.get<Country[]>(query, {params});
    

  }

}
