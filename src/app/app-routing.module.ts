import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './inicio/main-page/main-page.component';
import { MainPageBonsaisComponent } from './bonsais/main-page-bonsais/main-page-bonsais.component';
import { MainPageProductosComponent } from './productos/main-page-productos/main-page-productos.component';
import { MainPageServiciosComponent } from './servicios/main-page-servicios/main-page-servicios.component';
import { MainPageGaleriaComponent } from './galeria/main-page-galeria/main-page-galeria.component';
import { MainPageAboutUsComponent } from './about-us/main-page-about-us/main-page-about-us.component';
import { MainpageLoginComponent } from './login/mainpage-login/mainpage-login.component';
import { MainPageAvisoComponent } from './avisos/main-page-aviso/main-page-aviso.component';
import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [
   
  {
    path: 'inicio',
    component: MainPageComponent
  },
  {
    path: 'bonsais',
    component: MainPageBonsaisComponent
  },
  {
    path: 'productos',
    component: MainPageProductosComponent
  },
  {
    path: 'servicios',
    component: MainPageServiciosComponent
  },
  {
    path: 'galeria',
    component: MainPageGaleriaComponent
  },
  {
    path: 'sobreNosotros',
    component: MainPageAboutUsComponent
  },
  {
    path: 'login',
    component: MainpageLoginComponent
  },
  {
    path: 'avisos',
    component: MainPageAvisoComponent,
    canLoad:[AuthGuard],
    canActivate:[AuthGuard],
  },
 
  {
    path:"**",
    redirectTo:"inicio"
    
  }
]


@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
