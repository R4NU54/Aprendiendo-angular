import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public charactersList: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 7000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharecter: Character = { id: uuid(), ...character };
    this.charactersList.push(newCharecter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.charactersList.splice(index, 1);
  // }
  onDeleteCharacterbyId(id: string): void {
    this.charactersList = this.charactersList.filter(character => character.id != id);
  }
}
