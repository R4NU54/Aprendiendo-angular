import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  public characters: Character[] = [{ name: 'Thunks', power: 10 }];

  @Output()
  // Otra Forma de hacerlo.
  // public onDeleteIndex = new EventEmitter<number>();
  public onDeleteIndex: EventEmitter<number> = new EventEmitter<number>();

  onDeleteCharacter(index: number): void {
    this.onDeleteIndex.emit(index);
  }
}
