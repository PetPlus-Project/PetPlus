import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ImageCard1: string;
  ImageMarca1: string;

  constructor() {
     //image location
     this.ImageCard1 = '/components/imgs/imgCards/card1.png'
     this.ImageMarca1 = '/components/imgs/imgMarcas/marca1.jpg'
  }

  ngOnInit() {
    
  }
}
