import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { InfoComponent } from './components/info/info.component';
import { MapComponent } from './components/map/map.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    InicioComponent,
    InfoComponent,
    MapComponent,
    MainPageComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,    
    SharedModule
    
  ],
  exports: []

})
export class InicioModule { }
