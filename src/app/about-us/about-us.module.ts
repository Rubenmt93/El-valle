import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageAboutUsComponent } from './main-page-about-us/main-page-about-us.component';
import { ViveroComponent } from './components/vivero/vivero.component';
import { JuanComponent } from './components/juan/juan.component';



@NgModule({
  declarations: [
    MainPageAboutUsComponent,
    ViveroComponent,
    JuanComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
