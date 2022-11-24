import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageGaleriaComponent } from './main-page-galeria/main-page-galeria.component';
import "@ptkdev/webcomponent-instagram-widget";
import { GalleryLightboxComponent } from './components/gallery-lightbox/gallery-lightbox.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    MainPageGaleriaComponent,
    GalleryLightboxComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class GaleriaModule { }
