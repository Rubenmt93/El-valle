import { Component, HostListener, Input, OnInit } from '@angular/core';
interface Item {
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.css']
})
export class GalleryLightboxComponent implements OnInit {
  @Input() galleryData: Item[] = []
  @Input() showCount = false
  showMask:boolean= false
  currentLightboxImage: Item = this.galleryData[0]
  currentIndex=0
  controls:boolean = false
  previewImage:boolean=false
  totalImageCount=0
  @HostListener('document:keyup', ['$event'])
    onKeyUp(ev:KeyboardEvent) {
      // do something meaningful with it
      
      if(this.showMask){
        switch(ev.key){
          case 'Escape':
            this.closeImage();
            break;
          case "ArrowRight":
            this.nextImage();
            break
          case "ArrowLeft":
            this.prevImage();
            break

        }
      }
     }
  constructor() { }

  ngOnInit(): void {
    this.totalImageCount= this.galleryData.length
  }
  onPreviewImage(index: number):void{
    this.showMask=true
    this.previewImage=true
    this.controls=true
    this.currentIndex=index
    this.currentLightboxImage = this.galleryData[index]

  }
  closeImage(){
    this.previewImage=false

    this.showMask=false
    this.controls=false
    this.currentIndex=0
    this.currentLightboxImage = this.galleryData[0]
  }
  nextImage(){
    if(this.currentIndex === this.totalImageCount-1){
      this.currentIndex=0
      this.currentLightboxImage = this.galleryData[0]
     }else{
      this.currentIndex++
      this.currentLightboxImage = this.galleryData[this.currentIndex]
     }
    }
  prevImage(){
    if(this.currentIndex === 0){
      this.currentIndex=this.totalImageCount-1
      this.currentLightboxImage = this.galleryData[this.totalImageCount-1]
     }else{
      this.currentIndex--
      this.currentLightboxImage = this.galleryData[this.currentIndex]
     }
    }
  }
