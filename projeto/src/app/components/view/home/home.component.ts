import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ImageCard1: string;
  ImageMarca1: string;
  ImageMarca2: string;
  ImageMarca3: string;
  ImageMarca4: string;
  ImageMarca5: string;
  ImageMarca6: string;
  ImageMarca7: string;

  constructor() {
     //image location
     this.ImageCard1 = '/components/imgs/imgCards/card1.png'
     this.ImageMarca1 = '/assets/img/imgMarcas/marca1.jpg'
     this.ImageMarca2 = '/assets/img/imgMarcas/marca2.jpg'
     this.ImageMarca3 = '/assets/img/imgMarcas/marca3.jpg'
     this.ImageMarca4 = '/assets/img/imgMarcas/marca4.jpg'
     this.ImageMarca5 = '/assets/img/imgMarcas/marca5.jpg'
     this.ImageMarca6 = '/assets/img/imgMarcas/marca6.jpg'
     this.ImageMarca7 = '/assets/img/imgMarcas/marca7.jpg'
  }

  ngOnInit() {
    
  }
}
