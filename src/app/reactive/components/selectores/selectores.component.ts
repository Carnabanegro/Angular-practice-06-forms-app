import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { Country } from './interfaces/countrys.interface';
import { switchMap, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-selectores',
  templateUrl: './selectores.component.html',
  styleUrls: ['./selectores.component.scss']
})
export class SelectoresComponent implements OnInit {

  formSelectores : FormGroup = this.fb.group({
    continente: [,Validators.required],
    pais: [,Validators.required],
    limitrofe: [,Validators.required]
  })


  //selectores
  continentes :  string[] = [];
  paises : Country[] = [];
  limitrofes : string[] = [];

  //UI 

  cargando : boolean = false;


  constructor(private fb : FormBuilder, private paisesService : PaisesServiceService) { }

  ngOnInit(): void {


    this.continentes = this.paisesService.continentes;


    //cuando cambiar valor de selector de paises 

    this.formSelectores.get('continente')?.valueChanges
    .pipe(
        tap((_) =>{
            this.formSelectores.get('pais')?.reset('')
            this.cargando = true;
        }),
        switchMap(
            continente => this.paisesService.buscarPorRegion(continente)
        )
      )
    .subscribe( paises  => {

      this.paises = paises
      this.cargando = false;

    })

    //Cuando cambiar el valor de selector limitrofe

    this.formSelectores.get('pais')?.valueChanges
    .pipe(
        tap((_) =>{
          this.limitrofes = [];
          this.formSelectores.get('limitrofe')?.reset('')
          this.cargando = true;
        }),
        switchMap(
          codigo => this.paisesService.getPaisesPorCodigo(codigo)
        )
    )
    .subscribe( limitrofes  => {
       if (limitrofes){
        this.cargando = false;
        this.limitrofes = limitrofes[0]?.borders || [];
       }
    })

  }

  guardar(){
        console.log('Posteo realizado')
  }

  

}
