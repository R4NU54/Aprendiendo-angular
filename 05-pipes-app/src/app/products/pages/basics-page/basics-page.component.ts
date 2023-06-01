import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public upperCase: string = 'raúl núñez';
  public lowerCase: string = 'RAÚL NÚÑEZ';
  public titleCase: string = 'rAÚl nÚÑEZ';

  public customDate: Date = new Date();
}
