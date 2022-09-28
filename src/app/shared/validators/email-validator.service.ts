import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map, delay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    
    const email = control.value
   
    return this.http.get<any[]>(`${environment.url}/usuarios?q=${email}`)
              .pipe(
                  delay(3000),
                  map( resp =>{
                      return (resp.length===0)
                        ? null
                        : {emailTomado: true}
                  })
              )

  }
  
}
