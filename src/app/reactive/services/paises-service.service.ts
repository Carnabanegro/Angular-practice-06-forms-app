import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
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
    
    const params = new HttpParams().set('fields','name,cca3,borders');

    return this.http.get<Country[]>(query, {params});
    

  }

  getPaisesPorCodigo(codigo:string): Observable<Country[]>{

    if (!codigo){
      return of([])
    }

    const query : string = `${environment.urlCountries}alpha/${codigo}` ;

    return this.http.get<Country[]>(query);

  }

  //VER COMO RESOLVER EL TEMA QUE DEVUELVE UN ARRAY DE ARRAY YA QUE NE LA ULTIMA VERSION DE PAISES  LA LLAMADA DE UN PAIS RETORNA UN ARRAY SIEMPRE 
  /*getNombresPaises(borders:string[]): Observable<Country[]>{

    if (!borders){
      return of([])
    }

    const peticiones : Observable<Country>[] = []

    borders.forEach( codigo =>{
      const peticion =  this.getPaisesPorCodigo(codigo);
      peticiones.push(peticion)
    })

    return combineLatest(peticiones)

  }*/

}
