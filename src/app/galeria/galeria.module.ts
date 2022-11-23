import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageGaleriaComponent } from './main-page-galeria/main-page-galeria.component';
import "@ptkdev/webcomponent-instagram-widget";



@NgModule({
  declarations: [
    MainPageGaleriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GaleriaModule { }
