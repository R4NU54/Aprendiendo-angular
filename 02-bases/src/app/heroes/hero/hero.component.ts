import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public name: string = 'batman';
  public age: number = 38;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Superman';
  }

  changeAge(): void {
    this.age = 47;
  }

  reset(): void {
    this.name = 'batman';
    this.age = 38;
  }
}
