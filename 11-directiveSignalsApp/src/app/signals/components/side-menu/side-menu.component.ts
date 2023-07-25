import { Component, signal } from '@angular/core';

interface MenuItems {
  name: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public menuItems = signal<MenuItems[]>([
    { name: 'Contador', route: 'counter' },
    { name: 'Usuario', route: 'user-info' },
    { name: 'Mutaciones', route: 'properties' },
  ]);

  // public menuItems: MenuItems[] = [
  //   { name: 'Contador', route: 'counter' },
  //   { name: 'Usuario', route: 'user-info' },
  //   { name: 'Mutaciones', route: 'properties' },
  // ];
}
