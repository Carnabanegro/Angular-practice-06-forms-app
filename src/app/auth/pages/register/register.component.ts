import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  

  

  formularioRegistro : FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.validatorService.nombreRegistroPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.validatorService.emailRegistroPattern)],[this.emailValidator]],
    username: ['',[Validators.required,this.validatorService.noPuedeSerStrider]],
    password: ['',[Validators.required,Validators.minLength(6)]],
    password2: ['',Validators.required]
  },{
    validators:[ this.validatorService.camposIguales('password','password2' ) ]
  })

  constructor(private fb : FormBuilder, private validatorService: ValidatorsService,private emailValidator: EmailValidatorService) { }


  get emailErrorMsg(): string{
    const errors = this.formularioRegistro.get('email')?.errors;

    if (errors?.['required']) {
        return "El correo es obligatorio *"
    }
    if (errors?.['pattern']){
        return "Formato mail debe ser: nombre@mail.com"
    }
    if (errors?.['emailTomado']){
        return "El mail ya esta en uso"
    }
    return ''
  }

  ngOnInit(): void {

    this.formularioRegistro.reset({
      nombre: 'patricio serra',
      email: 'patoserra74@hotmail.com',
      username: 'larenga',
      password: '123456',
      password2: '123456'
    })
  }

  campoValido(campo:string){
      return this.formularioRegistro.controls[campo]?.invalid && this.formularioRegistro.controls[campo]?.touched;
  }



  /*emailRequired(){
    return this.formularioRegistro.controls['email']?.errors?.['required'] && this.formularioRegistro.controls['email']?.touched;
  }

  emailFormato(){
    return this.formularioRegistro.controls['email']?.errors?.['pattern'] && this.formularioRegistro.controls['email']?.touched;
  }

  mailUsado(){
    return this.formularioRegistro.controls['email']?.errors?.['emailTomado'] && this.formularioRegistro.controls['email']?.touched;
  }*/


  guardar(){

    console.log(this.formularioRegistro)
    this.formularioRegistro.markAllAsTouched()
  }
}
