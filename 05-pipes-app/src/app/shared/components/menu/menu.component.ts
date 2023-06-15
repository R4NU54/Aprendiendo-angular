import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        items: [
          { label: 'Textos y Fechas', icon: 'pi pi-align-left', routerLink: '/' },
          { label: 'Números', icon: 'pi pi-refresh', routerLink: '/numbers' },
          { label: 'No comunes', icon: 'pi pi-cog', routerLink: '/uncommon' },
        ],
      },
      {
        label: 'Pipes Personalizados',
        items: [{ label: 'Custom Pipes', icon: 'pi pi-wrench', routerLink: '/custom' }],
      },
    ];
  }
}
