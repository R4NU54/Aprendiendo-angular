import { Component, OnInit, inject } from '@angular/core';

import { Country } from '../../interfaces/country.interface';

import { CountriesService } from '../../services/countries.service';

import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  private countriesService = inject(CountriesService);

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Europe', 'Americas', 'Asia', 'Oceania'];
  public regionSelected?: Region;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.regionSelected = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    this.regionSelected = region;
    this.isLoading = true;
    this.countriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
