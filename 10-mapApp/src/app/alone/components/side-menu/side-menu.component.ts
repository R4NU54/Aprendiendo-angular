import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    {
      name: 'Full Screen',
      route: '/maps/fullscreen',
    },
    {
      name: 'Zoom',
      route: '/maps/zoom',
    },
    {
      name: 'Markers',
      route: '/maps/markers',
    },
    {
      name: 'Houses',
      route: '/maps/properties',
    },
    {
      name: 'Alone Page',
      route: '/alone',
    },
  ];
}
