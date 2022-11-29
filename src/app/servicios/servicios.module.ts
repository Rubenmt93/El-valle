import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageServiciosComponent } from './main-page-servicios/main-page-servicios.component';
import { EscuelaComponent } from './components/escuela/escuela.component';
import { ClinicaComponent } from './components/clinica/clinica.component';
import { AsesoramientoComponent } from './components/asesoramiento/asesoramiento.component';
import { GuarderiaComponent } from './components/guarderia/guarderia.component';



@NgModule({
  declarations: [
    MainPageServiciosComponent,
    EscuelaComponent,
    ClinicaComponent,
    AsesoramientoComponent,
    GuarderiaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServiciosModule { }
