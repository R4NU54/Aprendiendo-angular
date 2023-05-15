import { Component, inject } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gif-service.';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  private gifService = inject(GifsService);

  get tags(): string[] {
    return this.gifService.tagsHistory;
  }

  searchTag(tag: string): void {
    this.gifService.searchTag(tag);
  }
}
