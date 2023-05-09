import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent {
  public heroesNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman'];
  public deletedHero?: string;

  eraseLastHeroe(): void {
    this.deletedHero = this.heroesNames.pop();
  }
}
