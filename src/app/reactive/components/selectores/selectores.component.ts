import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { Country } from './interfaces/countrys.interface';

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
  limitrofes : Country[] = [];


  constructor(private fb : FormBuilder, private paisesService : PaisesServiceService) { }

  ngOnInit(): void {


    this.continentes = this.paisesService.continentes;


    //cuando cambiar valor de selector de paises 

    this.formSelectores.get('continente')?.valueChanges
      .subscribe( continente => {
            //debo limpar el selector pais cuando cambie el valor FALTA HACER!!!!!
           this.paisesService.buscarPorRegion(continente)
                .subscribe( (paises) =>{
                  //debo limpar el selector limitrofe cuando cambien los otros selectores superiores FALTA HACER!!!!!
                  this.paises = paises;
                })

      })
  }

  guardar(){

  }

}
