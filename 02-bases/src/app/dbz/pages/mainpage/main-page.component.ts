import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'MainPagecomponent',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public charactersList: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegetta',
      power: 7000,
    },
  ];

  onNewCharacter(character: Character): void {
    this.charactersList.push(character);
  }

  onDeleteCharacter(index: number): void {
    console.log(index);
    this.charactersList.splice(index, 1);
  }
}
