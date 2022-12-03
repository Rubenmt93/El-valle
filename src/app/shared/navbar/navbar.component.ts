import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged:boolean=false
  constructor(public authService:AuthService) {
    this.authService.userStateObs().subscribe(user =>{
      if (user) {                  
        this.logged=true        
      }
    });
   }

  ngOnInit(): void {
  }
  logout(){
    this.authService.cerrarSesion();
  }

}
