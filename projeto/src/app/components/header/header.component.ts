import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  ImagePath: string;
  ImageLogo: string;
  ImageFundo: string;
  ImageFundo2: string;
  
  constructor() {
    //image location
    this.ImagePath = '/assets/img/cachorro.png',
    this.ImageLogo = '/assets/logo/logo.png'
    this.ImageFundo = '/assets/img/Fundo/fundo.png'
    this.ImageFundo2 = '/assets/img/Fundo/walpapper.jpeg'
  }
  
  ngOnInit(): void {
    const menu = document.querySelector('#menu-icon') as HTMLElement | null;
const navbar = document.querySelector('.navbar') as HTMLElement | null;

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
  };
}
  }

}
