import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  miFormulario : FormGroup = this.fb.group({
      genero: ['M',Validators.required],
      notifi: [true,Validators.required],
      terminos: [false, [Validators.required, Validators.requiredTrue]]
  })

  persona = {
    genero : 'F',
    notifi : true
  }
  
  ngOnInit(): void {

    this.miFormulario.reset({...this.persona,terminos:false})

    this.miFormulario.valueChanges.subscribe(({terminos, ...rest}) =>{
      this.persona = rest;
    })

       
  }

  guardar(){
      const formValue = {...this.miFormulario.value}

      delete formValue.terminos;
      this.persona = formValue;

      console.log('posteo echo')
    
  }

}
