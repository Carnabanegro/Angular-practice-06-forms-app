import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  initForm = {
    producto: 'Ejemplo',
    precio: 0,
    stock: 0
  }

  constructor() { }

  @ViewChild('miFormulario') miFormulario! : NgForm ;
    

  ngOnInit(): void {
  }

  
  productoValido(): boolean{
    return this.miFormulario?.controls['producto']?.invalid &&  this.miFormulario?.controls['producto']?.touched;
  }

  precioValido(){
    return this.miFormulario?.controls['precio']?.value < 0 && this.miFormulario?.controls['producto']?.touched;
  }

  guardar(){
    console.log(this.miFormulario)
    console.log('Posteo correcto')
    this.miFormulario.resetForm();
  }

}
