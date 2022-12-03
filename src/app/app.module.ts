import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

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
import { LoginModule } from './login/login.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AvisosModule } from './avisos/avisos.module';

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
    AboutUsModule,
    HammerModule,
    LoginModule,
    AvisosModule,
    
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireAuthModule

   

  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
