import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  //formulario con FormControl comun
  /*miFormulario:FormGroup = new FormGroup({
    'producto': new FormControl('RTX 6500'),
    'precio': new FormControl(5000),
    'stock': new FormControl(0)
  })*/

  //formulario con FormBuilder
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.miFormulario.reset({
        producto: 'RTX 6500',
        precio: 5000
      })
  }


  miFormulario: FormGroup = this.fb.group(
    {
    producto: [, [Validators.required, Validators.minLength(3)] ],
    precio: [, [Validators.required,Validators.min(0)] ],
    stock: [, [Validators.required,Validators.min(0)] ]
    }
  )



  

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
