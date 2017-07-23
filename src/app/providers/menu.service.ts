import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  opened: boolean = false;
  options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Home',
      route: '/'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Produtos',
      route: '/products'
    } 
  ]

  constructor() { }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
  
  fix() {
    if (document.body.scrollTop > 65) {
      document.querySelector('section.outer').classList.add('margin-fix');
    }
    else {
      document.querySelector('section.outer').classList.remove('margin-fix');
    }
  }


}
