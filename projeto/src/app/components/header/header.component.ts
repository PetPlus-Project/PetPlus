import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  ImagePath: string;
  ImageLogo: string;
  
  constructor() {
    //image location
    this.ImagePath = '/assets/img/cachorro.png',
    this.ImageLogo = '/assets/logo/logo.png'
  }
  
  ngOnInit() {
    
  }

}
