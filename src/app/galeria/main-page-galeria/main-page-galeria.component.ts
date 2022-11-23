import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-galeria',
  templateUrl: './main-page-galeria.component.html',
  styleUrls: ['./main-page-galeria.component.css']
})
export class MainPageGaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    var i,e,d=document,s="script";
    i=d.createElement("script");
    i.async=true;
    i.charset="UTF-8";
    i.src="https://cdn.curator.io/published/746c70ad-6cf4-48e9-9b7b-9ce1e88e1ce5.js";

    e=d.getElementsByTagName(s)[0];
    e.parentNode?.insertBefore(i, e);
    
  }

}
