import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageBonsaisComponent } from './main-page-bonsais/main-page-bonsais.component';
import { ExteriorContainerComponent } from './components/exterior-container/exterior-container.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SharedModule } from '../shared/shared.module';
import { InteriorContainerComponent } from './components/interior-container/interior-container.component';




@NgModule({
  declarations: [    
  
    MainPageBonsaisComponent, ExteriorContainerComponent, InteriorContainerComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    SharedModule
    
  ]
})
export class BonsaisModule { }
