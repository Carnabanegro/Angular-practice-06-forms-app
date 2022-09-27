import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string,
  favoritos: Favorito[]
}

interface Favorito{
  id:number,
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent implements OnInit {

  nuevoJuego : string = '';
  persona : Persona = {
    nombre:  'patricio',
    favoritos: [
      {id:1,nombre:'sonic'},
      {id:2,nombre:'mario bros'}
    ]
  }

  @ViewChild('miFormularioDinamico') miFormularioDinamico!: NgForm

  constructor() { }

  ngOnInit(): void {

  }

  nombreValido(){
    return  this.miFormularioDinamico?.controls['nombre']?.touched &&  this.miFormularioDinamico.controls['nombre'].invalid
  }


  guardar(){
    console.log(this.miFormularioDinamico);
  }

  borrarFavorito(index:number){
    this.persona.favoritos.splice(index,1);
  }

  agregarFavorito(){

    const juego : Favorito = {
      id: this.persona.favoritos.length+ 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...juego});
    this.nuevoJuego = ''

  }

}
