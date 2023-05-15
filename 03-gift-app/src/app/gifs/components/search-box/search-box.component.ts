import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../services/gif-service.';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagName')
  tagInput!: ElementRef<HTMLInputElement>;

  private gifService = inject(GifsService);

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
