import { MenuService } from '../../providers/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public menu: MenuService) { }

  ngOnInit() {
    document.addEventListener('scroll', e => {
      if(document.body.scrollTop > 65) {
        document.querySelector('app-header nav').classList.add('fixed');
      }
      else {
        document.querySelector('app-header nav').classList.remove('fixed');
      }
      this.menu.fix();
    }, true);
  }

}
