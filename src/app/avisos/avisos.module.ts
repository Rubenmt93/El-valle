import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAvisosComponent } from './component/lista-avisos/lista-avisos.component';
import { NuevoAvisosComponent } from './component/nuevo-avisos/nuevo-avisos.component';
import { MainPageAvisoComponent } from './main-page-aviso/main-page-aviso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AvisocontainerComponent } from './component/avisocontainer/avisocontainer.component';



@NgModule({
  declarations: [
    
    ListaAvisosComponent,
    NuevoAvisosComponent,
    MainPageAvisoComponent,
    AvisocontainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class AvisosModule { }
