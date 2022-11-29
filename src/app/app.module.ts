import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { InicioModule } from './inicio/inicio.module';
import { SharedModule } from './shared/shared.module';
import { GaleriaModule } from './galeria/galeria.module';
import { BonsaisModule } from './bonsais/bonsais.module';
import { ServiciosModule } from './servicios/servicios.module';
import { ProductosModule } from './productos/productos.module';
import { AboutUsModule } from './about-us/about-us.module';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    InicioModule,
    SharedModule,
    GaleriaModule,
    BonsaisModule,
    ServiciosModule,
    ProductosModule,
    AboutUsModule
  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
