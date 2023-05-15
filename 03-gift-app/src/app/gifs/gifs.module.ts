import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { GifsCardComponent } from './components/card/card.component';
import { GiftCardListComponent } from './components/gift-card-list/gift-card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, GiftCardListComponent, GifsCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
