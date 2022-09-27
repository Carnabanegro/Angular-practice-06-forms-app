import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group(
    {
    nombre: [, [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array([
        ['Sonic'],
        ['Mario Bros']
    ],[Validators.required,Validators.minLength(3)])
    }
  )

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'patricio',
      //precio: 5000
    })
    console.log(this.miFormulario)
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }



}
