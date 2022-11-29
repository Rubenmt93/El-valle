import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageProductosComponent } from './main-page-productos/main-page-productos.component';
import { MacetasComponent } from './components/macetas/macetas.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { AlambresComponent } from './components/alambres/alambres.component';
import { VitaminasComponent } from './components/vitaminas/vitaminas.component';
import { AbonosComponent } from './components/abonos/abonos.component';
import { TierrasComponent } from './components/tierras/tierras.component';
import { FitosanitarioComponent } from './components/fitosanitario/fitosanitario.component';



@NgModule({
  declarations: [
    MainPageProductosComponent,
    MacetasComponent,
    HerramientasComponent,
    AlambresComponent,
    VitaminasComponent,
    AbonosComponent,
    TierrasComponent,
    FitosanitarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
