import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent  {

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [,[Validators.required, Validators.minLength(3)]],
      favoritos: this.fb.array([
        [ 'Metal Gear', Validators.required ],
        [ 'Death Stranding',Validators.required  ],
      ], Validators.required )
    }
  )

  nuevoFavorito: FormControl = this.fb.control('',Validators.required);

  constructor(private fb : FormBuilder) { }

  
  campoEsValido(campo:string){
  
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  get favoritos(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray
  }

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

  agregarFavorito(){
  
    this.favoritos.push(new FormControl(this.nuevoFavorito.value, Validators.required))
  }

  borrarFavorito(index:number){
    this.favoritos.removeAt(index);
  }



}
