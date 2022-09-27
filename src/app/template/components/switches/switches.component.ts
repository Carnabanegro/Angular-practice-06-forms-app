import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Form{
  genero: 'F' | 'M' | '0',
  notificar: boolean,
  terminos: boolean
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  @ViewChild('miFormularioSwitch') miFormularioSwitch!: NgForm;

  form : Form = {
    genero: 'F',
    notificar: false,
    terminos: false
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('POSTEO REALIZADO')
    console.log(this.miFormularioSwitch)
  }

}
