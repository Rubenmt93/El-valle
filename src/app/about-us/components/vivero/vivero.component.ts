import { Component, OnInit } from '@angular/core';
interface Item{
  imageSrc: string
 imageAlt: string
}
@Component({
  selector: 'app-vivero',
  templateUrl: './vivero.component.html',
  styleUrls: ['./vivero.component.css']
})
export class ViveroComponent implements OnInit {
  maxNum:number =1
  constructor() { }

  ngOnInit(): void {
  }
  images:Item[]=[
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/centrobonsaielvalle-cff2a.appspot.com/o/FotosFijas%2Fsobrenosotros-viveroabajo.jpg?alt=media&token=",
      imageAlt: 'Parte de abajo del vivero'
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/centrobonsaielvalle-cff2a.appspot.com/o/FotosFijas%2Fsobrenosotros-viveroinvernadero.jpg?alt=media&token=",
      imageAlt: 'Foto del Invernadero'
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/centrobonsaielvalle-cff2a.appspot.com/o/FotosFijas%2Fsobrenosotros-viveroaula.jpg?alt=media&token=",
       imageAlt: 'Foto del aula'
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/centrobonsaielvalle-cff2a.appspot.com/o/FotosFijas%2Fsobrenosotros-viveroazotea.jpg?alt=media&token=",
       imageAlt: 'Foto de la azotea'
    },
  ]

}
