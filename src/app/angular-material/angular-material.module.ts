import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  exports:[    
    MatCardModule,    
    MatIconModule,   
    MatSidenavModule,
    MatListModule,   
    MatSelectModule,
    MatToolbarModule,  
    MatInputModule,
    MatButtonModule,


      
  ],
 
})
export class AngularMaterialModule { }
