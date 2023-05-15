import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gift-card-list',
  templateUrl: './gift-card-list.component.html',
})
export class GiftCardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
