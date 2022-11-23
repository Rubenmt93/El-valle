import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HaciaAbajoComponent } from './hacia-abajo/hacia-abajo.component';
import { HaciaArribaComponent } from './hacia-arriba/hacia-arriba.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [   
        NavbarComponent,
        HaciaAbajoComponent,
       HaciaArribaComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HaciaAbajoComponent,
    HaciaArribaComponent
   
  ]
})
export class SharedModule { }
