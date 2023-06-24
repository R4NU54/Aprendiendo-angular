import { Component } from '@angular/core';
import { menuItems } from '../../interfaces/menu.interface';

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [],
})
export class SideMenuComponent {
  public reactiveMenuItems: menuItems[] = [
    {
      title: 'Básicos',
      icon: '',
      route: '/reactive/basic',
    },
    {
      title: 'Dinámicos',
      icon: '',
      route: '/reactive/dynamic',
    },
    {
      title: 'Switches',
      icon: '',
      route: '/reactive/switches',
    },
  ];
  public authMenuItems: menuItems[] = [
    {
      title: 'Registro',
      icon: '',
      route: '/auth',
    },
  ];
}
