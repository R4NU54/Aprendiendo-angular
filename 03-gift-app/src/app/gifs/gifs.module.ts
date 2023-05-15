import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GiftCardListComponent } from './components/gift-card-list/gift-card-list.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, GiftCardListComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
