import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectoresComponent } from './components/selectores/selectores.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    SelectoresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
